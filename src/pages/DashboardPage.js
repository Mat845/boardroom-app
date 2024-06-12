import React from 'react'
import LoginPage from './LoginPage'

const DashboardPage = () => {
  return (
    <div>DashboardPage

      <button className='btn btn-primary m-2 p-10' onClick={()=> console.log("clicked me")} >Click to Login</button>
    </div>
  )
}

export default DashboardPage