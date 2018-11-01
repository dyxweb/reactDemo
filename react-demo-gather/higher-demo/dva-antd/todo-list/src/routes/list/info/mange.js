import React from 'react';
const mange =()=>{
   var id=location.hash
  	id=id.split("/")
  	var id1=id[2]
  	return(
	<div>{id1}MANGE</div>
	)
  	}

export default mange