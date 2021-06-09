import CategoriesScreen from "../../components/screens/CategoriesScreen";
import TargetService from "../../services/target.service";

const Categories = CategoriesScreen;

export async function getStaticProps() {
  const data = await TargetService.categories();

  return {
    props: { data, debugMode: process.env.DEBUG || false },
  };
}

export default Categories;
