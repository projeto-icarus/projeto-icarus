import React from "react";
import Layout from "../components/Layout";
import NestedList from "../components/NestedList";
import useBlinder from "../hooks/useBlinder";
import TargetService from "../services/target.service";

const Categories = ({ data, debugMode }) => {
  const blinder = useBlinder();
  console.log(data);
  return (
    <Layout debugMode={debugMode}>
      <div className="container">
        <NestedList
          blinder={blinder}
          keyName="category"
          title="Todas as categorias"
          groups={data.categories}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await TargetService.categories();

  return {
    props: { data, debugMode: process.env.DEBUG || false },
  };
}

export default Categories;
