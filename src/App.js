import React from "react";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Content from "./component/content";
import './App.css';

function App(){
  return(
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}
export default App;