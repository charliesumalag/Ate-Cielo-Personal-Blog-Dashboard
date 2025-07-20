import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from "react";

const Dashboard = () => {
  const {name} = useContext(AppContext);


  return (
    <div>

      This is the dashoboard home
    </div>
  )
}

export default Dashboard
