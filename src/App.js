import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';

import './index.css' 

function App() {

 

  return (
    <>
      <Header />
      <div className="layoutDashboard">
        <Sidebar />
        <div className="container">
          <div>Container</div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
