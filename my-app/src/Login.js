import React, { useState } from 'react'

function Login(props) {
    let createdUserName ="sindhu"
let createdPassword ="12345"
const[userName,setUserName] = useState("")
const[password,setPassword] = useState ("")
const[enableErrorDiv,setEnableErrorDiv]=useState(false)
const triggerLogin =()=>{
    //if(createdUserName===userName&&createdPassword===password){
      if (userName === '' || password === '') {
        alert('Please enter both username and password.');
        return;
      }
        props.setIsLogged('home');
     
    }
  return (
    <div>
       <div style={{
        margin:"150px",
        background:"yellow",
        color:"green",
        width:"400px",
        height:"350px",
        marginLeft:"550px",
      border:"2px solid black"
    }} >
        <center>
      <div style={{fontSize:"28px",fontWeight:"bold"}}>Login page</div>
      <div>
      <div style={{margin:"10px",fontSize:"18px"}}>UserName</div>

<input onChange={(event) =>setUserName(event.target.value)}placholder="enterUserName" style={{marginBottom:"10px",fontSize:"18px"}}></input>
</div>
  <div>
<div style={{margin:"5px",fontSize:"18px"}}>PassWord</div>

<input onChange={(event) =>setPassword(event.target.value)}placholder="enterPassword"style={{margin:"5px",fontSize:"18px"}}></input>
</div>
<div>
    {enableErrorDiv===true&&<div style={{fontSize:"12px",color:"red"}}>Username and password are not valid</div>}
        <button onClick={() =>triggerLogin()} style={{margin:"15px", background:"#3B7BBF", color:"white",width:"265px",height:"30px",borderStyle:"none"}}>Log in</button>
        </div> 
            <div style={{margin:"25px"}}>
            <button onClick={() => props.setIsLogged('sign')} >sign up </button>
        </div>         
          
            </center>
</div>
    </div>
  )
}

export default Login
