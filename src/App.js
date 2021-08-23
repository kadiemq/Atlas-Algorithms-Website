import './style.css'
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './state/ActionCreators/ActionCreators'


import Navbar from './Component_Navbar/Navbar'
import {Loading as LoadingComponent} from './Component_Loading/Loading'
import Home from './Component_Home/Home'

const classNames = require('classnames');

function App() {

  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const {Loading} = bindActionCreators(actions, dispatch);

  useEffect(() => {
      setTimeout(() => {

          Loading(false)

      }, 5000);
    // document.getElementsByClassName('PageHome-div')[0].style.height = window.innerHeight + "px";
    // function handleResize() {
    //     document.getElementsByClassName('PageHome-div')[0].style.height = window.innerHeight + "px";
    // }

    //   window.addEventListener('resize', handleResize)
  });

    return (
    <div>

      <div className="bg" id={loading ? "" : 'opacity_100'}/>

      <Navbar />

      
      <LoadingComponent />
 

      <Home />

    </div>
  )
}

export default App;
