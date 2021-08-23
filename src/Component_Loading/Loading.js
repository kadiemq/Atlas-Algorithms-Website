import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import atlas from '../atlas.png'
import './style.css'

const classNames = require('classnames');

export const Loading = () => {

  const loading = useSelector((state) => state.loading);

  useEffect(() => {

    const loading_logo = document.getElementsByClassName("loading-logo")[0];
    loading_logo.addEventListener("animationend", () => {loading_logo.style.display= "none"}, false);

  })

  const logo_classes = classNames('loading-logo', {  remove_padding_bottom: !loading, opacity_30: !loading });
  const logo_text_classes = classNames('loading_text', { opacity_0: !loading });

    return (
        <div className="components_wrapper">
            <img src={atlas} alt={'atlas logo'} className={logo_classes}/>
            <p className={logo_text_classes}>Loading</p>
        </div>
    )
}
