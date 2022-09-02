import React from 'react'
import {useLocation} from 'react-router-dom'

function OredrSummary() {
    const location = useLocation();
  return (
    <>
    <div style={{marginTop:'10px'}}>OredrSummary</div>
    <h1 style={{marginTop:'10px'}}> Order Confirmend</h1>
    <div>{location.state.name}</div>
    </>
  )
}

export default OredrSummary