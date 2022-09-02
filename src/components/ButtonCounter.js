import {React,useState} from 'react'

function ButtonCounter() {
    const zero = 0;
    const [data,data2] = useState(0)
  return (
    <div>
        <h1>Count:{data}</h1>
        
        <button onClick={() => data2(data + 1)}>click</button>
        <button onClick={() => data2(data - 1)}>click</button>
        <button onClick={() => data2(zero)}>click</button>
    </div>
  )
}

export default ButtonCounter