import TargetService from "../services/target.service";

const Home = ({ data }) => {
  return <div></div>;
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
