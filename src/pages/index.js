import TargetService from "../services/target.service";

export default function Home({ data }) {
  console.log(data);
  return <></>;
}

export async function getStaticProps() {
  // const indexData = await TargetService.index();
  // const indexData = await TargetService.category("bbw");
  // const indexData = await TargetService.categories();
  // const indexData = await TargetService.star("elisa-sanchez");
  const indexData = await TargetService.stars();

  return {
    props: { data: indexData },
  };
}
