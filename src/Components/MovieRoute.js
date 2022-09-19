import React from "react";
import { useLocation } from "react-router-dom";

export default function MovieRoute() {
  const location = useLocation();
  console.log(location.state.Description)
  return (
    <div style={{marginTop:30}}>
     <iframe width="856" height="438" src={location.state.Trailer}
      title={location.state.title}
      frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>

      </iframe>

   <p style={{fontSize:20,margin:40,color:"black"}}>
          <strong>Description: </strong>
          {location.state.Description}
          
          </p>
      
    </div>
  );
}

