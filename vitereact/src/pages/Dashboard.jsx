import React from 'react'
import Mobile from './Mobile'

function Dashboard() {


  const names = ['laptop','mobile','mobile'];

  return (
    <>
      <div>Dashboard</div>

      <Mobile category = {names} />
      
      </>
  )
}

export default Dashboard