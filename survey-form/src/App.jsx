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
      <h1>Survey Form</h1>
      <p>Name</p><input type="text" placeholder = "Enter Name" value ={name} onChange={(e)=>setName(e.target.value)} required/>
      <br></br>
      <p>Email</p><input type="email" placeholder = "Enter Email" value ={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <br></br>
      <p>Age</p>
      <input type="radio"  value ={age} onClick={(e)=>setAge(e.target.value)} required/><p>10-20</p>
      <input type="radio"  value ={age} onClick={(e)=>setAge(e.target.value)} required/><p>21-40</p>
      <input type="radio"  value ={age} onClick={(e)=>setAge(e.target.value)} required/><p>41-60</p>
      <input type="radio"  value ={age} onClick={(e)=>setAge(e.target.value)} required/><p>61-80</p>
      <p>Technology</p>
      <input type="drop-down" value={technology} onChange={(e)=>setTechnology(e.target.value)} required/>
      <br></br>
      <p>Comments</p><input type="textarea" placeholder="Enter Comments" value={comments} onChange={(e)=>setComments(e.target.value)} max="200"/>
      <br></br>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p>{result}</p>
    </div>
  )
}
export default App
