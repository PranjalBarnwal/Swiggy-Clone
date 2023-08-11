import React from 'react'
import { useParams } from 'react-router-dom'
import useGetResData from '../helper/useGetResData';

const Restaurant = () => {

    const {resid}=useParams();
    const resData=useGetResData(resid);
    resData&&console.log(resData);
  return (
    <div>
      restaurant page
    </div>
  )
}

export default Restaurant
