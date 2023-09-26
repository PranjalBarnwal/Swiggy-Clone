import React from 'react'
import { useParams } from 'react-router-dom'
import useGetResData from '../helper/useGetResData';

const Restaurant = () => {

    const {resid}=useParams();
    const resData=useGetResData(resid);
    // console.log(resData);
    console.log(resData?.data?.cards[0].card.card.info);
    // console.log(distance,"-----");
    const data=resData?.data?.cards[0]?.card?.card?.info;
    const distance=data?.sla?.lastMileTravelString; 
    const {name,cuisines,locality,avgRating,ratingCount}=data;
  return (
    <div className='mx-[21rem]'>
        <section className="resinfo flex justify-between border-b border-gray-300 border-dashed">
            <div className="left">
              <p>{name}</p>
              <p>{cuisines.join(",")}</p>
              <p>{locality} {distance}</p>
            </div>
            <div className="right">
              <p>{avgRating}</p>
              <p>{ratingCount}</p>
            </div>
        </section>
        <section className='menu'> Items....</section>
        <footer></footer>
    </div>
  )
}

export default Restaurant
