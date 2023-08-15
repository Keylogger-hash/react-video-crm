import React from 'react';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainLayout} from "./components/MainLayout/MainLayout";
function App() {
  return (
    <div className="">
        <Header/>
        <MainLayout/>
        <Footer/>
    </div>
  );
}

export default App;
