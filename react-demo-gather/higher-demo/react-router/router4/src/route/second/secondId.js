import React from "react";

const SecondId = (props) => {
  return (
    <div style={{color:"red"}}>{location.pathname.split('/')[2]}豆亚星{props.match.params.id}</div>
  )
}  
export default SecondId