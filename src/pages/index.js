import Layout from "../components/Layout";
import TargetService from "../services/target.service";
import Image from "next/image";
import styles from "../styles/Index.module.scss";

const Home = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="container-fluid">
        <div className={styles.mainCategories}>
          {data.mainCategories.map((cat) => (
            <div className={styles.category}>
              <Image {...cat.img} width="288px" height="162px" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await TargetService.index();
  // const indexData = await TargetService.category("bbw");
  // const indexData = await TargetService.categories();
  // const indexData = await TargetService.star("elisa-sanchez");
  // const indexData = await TargetService.stars();
  // const indexData = await TargetService.new();
  // const indexData = await TargetService.popular();
  // const indexData = await TargetService.rating();

  return {
    props: { data },
  };
}
