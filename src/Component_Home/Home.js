import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'

const classNames = require('classnames');


const Home = () => {

    const loading = useSelector((state) => state.loading)

    const home_classes = classNames('home_wrapper', {show_home: !loading})
    const home_text_classes = classNames('home_bg_text', {show_home_text: !loading})

    return (
        <div className={home_classes}>
            <p className={home_text_classes}>Home</p>

            {/* <div className={'home_typo_wrapper'}>
                <p>Atlas Algorithms</p>
                <p>help people in this ever evolving and distracting world by building applications that monitors, alerts, and execute commands on the behalf of clients to daily tasks that does not require a continuous attention yet very much important.</p>
            </div> */}
            
        </div>
    )
}

export default Home;