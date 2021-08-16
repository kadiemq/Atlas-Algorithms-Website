import './style.css'
import PageLoading from "./PageLoading/PageLoading";
import {useState} from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  if (isLoading) {
    return <PageLoading/>
  } else {
    return (
      <h1>Not Loading</h1>
    )
  }
   
}

export default App;
