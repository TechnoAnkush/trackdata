import {React,useState} from 'react'

function Use() {
    const [name,setname] = useState({Fullname:'',firstGender:''})
  return (
    <div>
        <form>
          <input type="text" value={name.Fullname} onChange={e => setname({Fullname:e.target.value})}/>
          <h1>My First Name is: {name.Fullname}</h1>
        </form>
    </div>
  )
}

export default Use;