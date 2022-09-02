//import logo from './logo.svg';
import {React,useState} from 'react';
import './App.css';
//const user = require("./data.json");
// import {Routes,Route} from 'react-router-dom'
// import Home from './components/Home';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import OredrSummary from './components/OredrSummary';
// import Use from './components/Use';
// import ButtonCounter from './components/ButtonCounter';
import User from './data.json';
console.log(User)
function App() {
  const [km,setname] = useState("");
  function clickeddata(){
   
   let ank = User.data.Banks.filter((val) => { 
   // console.log(val.loanstart)
    if(km >= val.loanstart && km <= val.loanEnd){
      console.log("aaaa");
        return val;
   }
  })
    for (let item of ank){
      console.log(item.name);
      console.log(item.intreset)
    }
  }

// const [APIData, setAPIData] = useState([]);
//   useEffect(() => {
//     fetch('./data.json')
//         .then((response) => {
//             setAPIData(response.data);
//         })
//         // /console.log([APIData])
// }, [])
  return (
    <div className="App">
        
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="order-summary" element={<OredrSummary/>}/>
      </Routes>
      <Use/>
      <br></br>
      <ButtonCounter/> */}
      <div>
        <form>
          <input type="text" value={km} onChange={e => setname(e.target.value)}/>
          <h1>My First Name is: {km.Fullname}</h1>
         <button onClick={clickeddata}>Clicked</button> 
        </form>
      </div>
      
    </div>
  );
}

export default App;
