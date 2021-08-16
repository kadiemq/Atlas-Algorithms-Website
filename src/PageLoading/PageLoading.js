import atlas from '../atlas.png'
import './style.css'

const PageLoading = () => {

    return (
        <div className={'PageLoading-div'}>
            <div className={'PageLoading-wrapper'}>
                <img src={atlas} className={'PageLoading-logo'}/>
                <div className={'PageLoading-logo-background'}></div>
            </div>
        </div>
    )
}

export default PageLoading