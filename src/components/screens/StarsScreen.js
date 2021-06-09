import React from "react";
import Layout from "../Layout";
import NestedList from "../NestedList";
import useBlinder from "../../hooks/useBlinder";

const StarsScreen = ({ data, debugMode, defaultOrientation }) => {
  const blinder = useBlinder();
  return (
    <Layout debugMode={debugMode} defaultOrientation={defaultOrientation}>
      <div className="container">
        <NestedList
          index
          blinder={blinder}
          keyName="category"
          title="Todas as estrelas pornô"
          groups={data.stars}
        />
      </div>
    </Layout>
  );
};

export default StarsScreen;
