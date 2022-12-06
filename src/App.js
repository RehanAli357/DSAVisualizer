import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Navigation Bar/NavigationBar";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";
import Arrays from "./Arrays/Arrays";
import Stack from "./Stack/Stack";
import Queue from "./Queue/Queue";
import Searching from "./Searching/Searching";
import LinearSearching from "./Searching/LinearSearching";
import BinarySearching from "./Searching/BinarySearch";
import Sorting from "./Sorting/Sorting";

import './Style/main.css';
const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Explore' element={<Explore />} />
        <Route exact path='/Array' element={<Arrays />} />
        <Route exact path='/Stack' element={<Stack />} />
        <Route exact path='/Queue' element={<Queue />} />
        <Route exact path='/Searching' element={<Searching />} />
        <Route exact path='/LinearSearching' element={<LinearSearching />} />
        <Route exact path='/BinarySearching' element={<BinarySearching />} />
        <Route exact path='/Sorting' element={<Sorting />} />

      </Routes>
    </React.Fragment>
  );
}

export default App;