import React, {useState} from "react";

import Button from '@atlaskit/button';
import Home from './Home'
import Example from "./Example";

import Sidebar from "./components/Sidebar";
import Shortlisted from "./components/Shortlisted";


const App = () => {
  const [showAllEmployees, setShowAllEmployees] = useState(true);

  const handleShowChange = (val) => {
    setShowAllEmployees(val)
    console.log("Im working")
  }
  return (
    <div>
      <Sidebar handleShowChange={handleShowChange} />
      <Home showAllEmployees={showAllEmployees}  />

    </div>
  );
};

export default App;
