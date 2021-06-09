import HomeScreen from "../components/screens/HomeScreen";
import TargetService from "../services/target.service";

const Home = HomeScreen;

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
