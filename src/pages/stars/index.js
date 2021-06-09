import StarsScreen from "../../components/screens/StarsScreen";
import TargetService from "../../services/target.service";

const Stars = StarsScreen;

export async function getStaticProps() {
  const data = await TargetService.stars();

  return {
    props: { data, debugMode: process.env.DEBUG || false },
  };
}

export default Stars;
