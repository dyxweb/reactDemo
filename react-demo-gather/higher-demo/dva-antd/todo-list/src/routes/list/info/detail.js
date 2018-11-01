import React from 'react';

const detail =()=>{
   var id=location.hash
  	id=id.split("/")
  	var id1=id[2]
  	return(
  		<div>

	<div>{id1}DETAIL</div>
	</div>
	)
  	}


export default detail