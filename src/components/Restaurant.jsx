import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// console.log(resData);
// console.log(distance,"-----");
import useGetResData from "../helper/useGetResData";

const Restaurant = () => {
  const [data, setData] = useState({});
  const { resid } = useParams();
  const resData = useGetResData(resid);
  useEffect(() => {
    setData(resData?.data?.cards[0].card.card.info);
    console.log(resData?.data?.cards[0].card.card.info);
  }, [resData]);
  const distance=data?.sla?.lastMileTravelString;
 
  return (
    <div className="mx-[21rem]">
      {data && (
        <>
          <section className="resinfo flex justify-between border-b border-gray-300 border-dashed">
            <div className="left">
              <p>{data?.name}</p>
              <p>{data?.cuisines?.join(",")}</p>
              <p>{data.locality} {distance}</p>
            </div>
            <div className="right">
              <p>{data.avgRating}</p>
              <p>{data.ratingCount}</p>
            </div>
          </section>
          <section className="menu"> Items....</section>
        </>
      )}
      <footer></footer>
    </div>
  );
};

export default Restaurant;
