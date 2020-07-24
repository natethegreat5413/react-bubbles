import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      console.log(res)
      setColorList(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [refresh])

  const refreshHandler = () => {
    setRefresh(!refresh)
  }

  return (
    <>
      <ColorList 
      colors={colorList} 
      updateColors={setColorList} 
      refreshHandler={refreshHandler}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
