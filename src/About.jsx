import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
function About() {
    let { id } = useParams();
    const [char, setChar] = useState({})
  useEffect(() => {
   
     fetch(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
    .then(response => response.json() )
    // 4. Setting *dogImage* to the image url that we received from the response above
.then(data => setChar(data) )
},[])

return(
    <section className='flex items-center justify-center'>
      <Link className="absolute left-2 top-3" to="/">
      <img src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-back-vector-icon-png-image_470452.jpg" alt="" srcset="" className='w-[30px]' />
      </Link>
    <div className="card bg-base-100 md:w-[60%]  shadow-xl mx-auto sm:w-[400px]">
  <figure>
    <img
      src={char.image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {char.name}
      <div className="badge badge-secondary">{char.species}</div>
    </h2>
   
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{char.gender}</div>
      <div className="badge badge-outline">{char.hair}</div>
      <div className="badge badge-outline">{char.origin}</div>
      <div className="badge badge-outline">{char.status}</div>
    </div>
  </div>
</div>
</section>
)
}

export default About