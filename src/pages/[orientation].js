import HomeScreen from "../components/screens/HomeScreen";
import TargetService from "../services/target.service";
import { orientationSlugs } from "../utils/consts";

const HomeOriented = HomeScreen;

export async function getStaticPaths() {
  return {
    paths: orientationSlugs.map((ori) => ({
      params: { orientation: ori },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await TargetService.index(params);

  return {
    props: {
      data,
      debugMode: process.env.DEBUG || false,
      defaultOrientation: params.orientation,
    },
  };
}

export default HomeOriented;
