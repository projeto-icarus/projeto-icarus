import StarsScreen from "../../components/screens/StarsScreen";
import TargetService from "../../services/target.service";
import { orientationSlugs } from "../../utils/consts";

const StarsOriented = StarsScreen;

export async function getStaticPaths() {
  return {
    paths: orientationSlugs.map((ori) => ({
      params: { orientation: ori },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await TargetService.stars(params);

  return {
    props: {
      data,
      debugMode: process.env.DEBUG || false,
      defaultOrientation: params.orientation,
    },
  };
}

export default StarsOriented;
