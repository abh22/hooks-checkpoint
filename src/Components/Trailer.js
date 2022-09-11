import React from 'react'
import { useParams } from 'react-router-dom'
const Trailer = ({ movies }) => {
  let id = useParams();





  return (

    <>
      <div>{movies.filter((movie) => movie.id === id)
        .map((movie) =>
          <div className='card' key={id}>
            <iframe width="956" height="538"
              src={movie.trailer} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>)}
      </div>



    </>
  )
}

export default Trailer