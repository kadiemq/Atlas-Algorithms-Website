import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import atlas from '../atlas.png'
import './style.css'
import * as actions from '../state/ActionCreators/ActionCreators'
import {bindActionCreators} from 'redux'

const PageLoading = () => {

    const dispatch = useDispatch()

    const {Loading} = bindActionCreators(actions, dispatch)

    useEffect(() => {
        setTimeout(() => {
            Loading(false)
        }, 3000)
    });

    return (
        <div className={'PageLoading-div'}>
            <div className={'PageLoading-wrapper'}>
                <img src={atlas} className={'PageLoading-logo'} alt="Logo"/>
                <div className={'PageLoading-logo-background'}></div>
                {/* <div className={'PageLoading-logo-background-2'}></div> */}
            </div>
        </div>
    )
}

export default PageLoading