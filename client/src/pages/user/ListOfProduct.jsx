import React, { useEffect, useState } from "react";
import SideBar from "../../components/user/listofproduct/SideBar";
import { Helmet } from "react-helmet";
import LastView from "../../components/user/listofproduct/LastView";
import ListProducts from "../../components/user/listofproduct/ListProducts";

const ListOfProduct = ({ category }) => {
  return (
    <>
      <Helmet>
        <title>{category} | TEELAB</title>
      </Helmet>
      <div className="container mx-auto flex gap-7 mt-16 md:mt-0">
        <SideBar />
        <ListProducts category={category} />
      </div>
      <LastView />
    </>
  );
};

export default ListOfProduct;
