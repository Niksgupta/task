import React from 'react';

import './App.css';

import Footer from "./components/Footer";
import Third from "./components/Third";
import Second from "./components/Second";
import First from "./components/First";
import Headnav from "./components/Headnav";



function App() {
  return (
    <div className="App">
      <Headnav />

{/* FIRST DIV  */}

<First />

{/* SECOND DIV */}

<Second />

{/* THIRD DIV */}

<Third />


{/* FOOTER PART  */}

<Footer />



</div>


  
  );
}

export default App;
