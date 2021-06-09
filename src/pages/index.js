import Layout from "../components/Layout";
import TargetService from "../services/target.service";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Index.module.scss";
import { Chip, Icon, Typography } from "@material-ui/core";
import NestedList from "../components/NestedList";
import { useSelector } from "react-redux";
import lorem from "../faker/lorem";

const Home = ({ data, debugMode }) => {
  const { blindImages, blindTitles } = useSelector((state) => state.settings);

  return (
    <Layout debugMode={debugMode}>
      <div className="container">
        <section className={styles.mainCategories}>
          <Typography variant="h5" component="h2" className="sectionTitle">
            {blindTitles ? lorem() : "Principais categorias"}
          </Typography>
          <div className={styles.mainCategoriesList}>
            {data.mainCategories.map((cat) => (
              <Link key={cat.title + "mainCategory"} href={cat.url}>
                <a>
                  <div key={cat.title} className={styles.category}>
                    <div className={styles.chipHolder}>
                      <Image
                        className={blindImages ? "blind-image" : ""}
                        {...cat.img}
                        width="288px"
                        height="162px"
                      />
                      <Chip
                        className={styles.total}
                        icon={<Icon>ondemand_video</Icon>}
                        size="small"
                        label={cat.total}
                      />
                    </div>
                    <Typography variant="body2" component="h3">
                      {blindTitles ? lorem() : cat.title}
                    </Typography>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
        <NestedList
          mt={4}
          blindTitles={blindTitles}
          groups={data.popularCategories}
          title="Categorias mais populares"
          button={{
            label: "Todas as categorias",
            href: "/categories",
          }}
        />
        <NestedList
          mt={4}
          blindTitles={blindTitles}
          groups={data.popularPornstars}
          title="Estrelas Pornô mais populares"
          button={{
            label: "Todas as estrelas pornô",
            href: "/stars",
          }}
        />
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await TargetService.index();
  // const indexData = await TargetService.category("0");
  // const indexData = await TargetService.categories();
  // const indexData = await TargetService.star("asd");
  // const indexData = await TargetService.stars();
  // const indexData = await TargetService.new();
  // const indexData = await TargetService.popular();
  // const indexData = await TargetService.rating();

  return {
    props: { data, debugMode: process.env.DEBUG || false },
  };
}
