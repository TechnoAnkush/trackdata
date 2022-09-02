import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div style={{ marginTop: '9px' }}>Home page</div>
    <button onClick={()=> navigate('order-summary', { state: { id: 1, name: "ankushdubey" } })}>Place order</button>
    </>
  )
}

export default Home