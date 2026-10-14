import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [technology,setTechnology] = useState("");
  const [comments,setComments]=useState("");
  const [error,setError] = useState("");
  const [result,setResult]=useState("");

  const handleSubmit =()=>{
    if(name===""||email===""||age===""||technology===""){
      setError("Missing values");
    }
    setResult(result);
  }
  return (
    <div>
      <h2>Survey Form</h2>
      <input type="text" placeholder = "Enter Name" value ={name} onChange={(e)=>setName(e.target.value)} required/>
      <br></br>
      <input type="email" placeholder = "Enter Email" value ={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <br></br>
      <input type="radio" value ={age} onChange={(e)=>setAge(e.target.value)} required/>
      <br></br>
      <option>10-20</option>
      <input type="dropdown" value={technology} onChange={(e=>setTechnology(e.target.value))} required/>
      <br></br>
      <input type="text" placeholder="Enter Comments" value={comments} onChange={(e)=>setComments(e.target.value)}/>
      <br></br>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p>{result}</p>
    </div>
  )
}

export default App
