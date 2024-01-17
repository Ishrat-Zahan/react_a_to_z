import React from 'react'


function Mobile(props) {
  
  const abc = props.category.map((item) => item)

  console.log(abc);

  return (
    <div>Mobile</div>
  )
}

export default Mobile