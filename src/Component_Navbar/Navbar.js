import React from 'react';
import {useSelector} from 'react-redux'

import { AiFillHome } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import { MdContactMail } from 'react-icons/md';

import './style.css'

const classNames = require('classnames');

const Navbar = () => {

    const loading = useSelector((state) => state.loading);
    const navbar_classes = classNames('navbar_wrapper', { show_navbar: !loading });

    return (
        <nav className={navbar_classes}>

        <a href="#" className={'icons'}> <AiFillHome /> </a>
        <a href="#" className={'icons'}> <AiFillInfoCircle/> </a>
        <a href="#" className={'icons'}> <AiOutlineAppstore/> </a>
        <a href="#" className={'icons'}> <MdContactMail/> </a>

    </nav>
    )
}

export default Navbar;