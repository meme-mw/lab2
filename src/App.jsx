import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link } from "react-router-dom"
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [chars, setChars] = useState([])
  useEffect(() => {
   
     fetch("https://6657369e9f970b3b36c865b0.mockapi.io/Images/")
    .then(response => response.json() )
    // 4. Setting *dogImage* to the image url that we received from the response above
.then(data => setChars(data) )
},[])

  return (
    <>
    <section className="flex flex-wrap items-center justify-around">
    {chars.map(el=>{
      return(
    
  
    <Link to={`/about/${el.id}`} className='mb-3 mt-3'>
    <img
      src={el.image}
      alt="chars" />
  </Link>
 
)})}
</section>
    </>)
}

export default App
