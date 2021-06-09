import Image from "next/image";
import Link from "next/link";
import { Chip, Icon, Typography } from "@material-ui/core";

import Layout from "../Layout";
import styles from "../../styles/Index.module.scss";
import NestedList from "../NestedList";
import useBlinder from "../../hooks/useBlinder";

const HomeScreen = ({ data, debugMode, defaultOrientation }) => {
  const blinder = useBlinder();

  return (
    <Layout debugMode={debugMode} defaultOrientation={defaultOrientation}>
      <div className="container">
        <section className={styles.mainCategories}>
          <Typography variant="h5" component="h2" className="sectionTitle">
            {blinder("Principais categorias", "titles")}
          </Typography>
          <div className={styles.mainCategoriesList}>
            {data.mainCategories.map((cat) => (
              <Link key={cat.url + "mainCategory"} href={cat.url}>
                <a>
                  <div key={cat.title} className={styles.category}>
                    <div className={styles.chipHolder}>
                      <Image
                        className={blinder("", "images", "blind-image")}
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
                      {blinder(cat.title, "titles")}
                    </Typography>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
        <NestedList
          mt={4}
          blinder={blinder}
          groups={data.popularCategories}
          title="Categorias mais populares"
          button={{
            label: "Todas as categorias",
            href: "/categories",
          }}
        />
        <NestedList
          mt={4}
          blinder={blinder}
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

export default HomeScreen;
