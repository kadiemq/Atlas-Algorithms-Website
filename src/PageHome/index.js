import './style.css'
import {useState, useEffect} from 'react'
import atlas from '../atlas.png'
import atlas_rotated from '../atlas_rotated.png'
import Home from './Home'
import About from './About'

const PageHomeIndex = () => {

    const [page, setPage] = useState('')

    useEffect(() => {
        document.getElementsByClassName('PageHome-div')[0].style.height = window.innerHeight + "px";
        function handleResize() {
            document.getElementsByClassName('PageHome-div')[0].style.height = window.innerHeight + "px";
        }
      
          window.addEventListener('resize', handleResize)
    })

    const Component = () => { switch(page) {
        case 'about':
            return <About />

        default:
            return <Home />
    }}

    return (
        <div className={'PageHome-div'}>

            <div className={'PageHome-nav'}>
                <p>AtlasAlgorithms</p>
                
                <ul>
                    <li onClick={() => setPage('')}>Home</li>
                    <li onClick={() => setPage('apps')}>Apps</li>
                    <li onClick={() => setPage('about')}>About</li>
                    <li onClick={() => setPage('contact')}>Contact</li>
                </ul>

            </div>

            <div className={'PageHome-mid'}>
                <Component/>
            </div>

            <div className={'PageHome-footer'}>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}

export default PageHomeIndex