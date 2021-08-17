import './style.css'
import PageLoading from "./PageLoading/PageLoading";
import HomePage from "./PageHome/PageHome";
import {useSelector} from 'react-redux'

function App() {

  const loading = useSelector((state) => state.loading)
  
  if (loading) {
    return <PageLoading/>
  } else {
    return <HomePage/>
  }
   
}

export default App;
