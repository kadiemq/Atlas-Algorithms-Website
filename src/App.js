import './style.css'
import PageLoading from "./PageLoading/PageLoading";
import HomePagePageHomeIndex from "./PageHome/index";
import {useSelector} from 'react-redux'

function App() {

  const loading = useSelector((state) => state.loading)
  
  if (loading) {
    return <PageLoading/>
  } else {
    return <HomePagePageHomeIndex/>
  }
   
}

export default App;
