import React, { useState } from 'react'

function Sign(props) {
    const[name,setName] = useState("")
    const[lname,setLname] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[npassword,setNpassword] = useState("")
    const[cpassword,setCpassword] = useState("")
    const dataFunction = () => {
      if (name === ''|| npassword === '' ) {
        alert('Please fill in all fields.');
        return;
      }
        let obj = {
          name: name,
            lname: lname,
            email: email,
            phone: phone,
            npassword:npassword,
            cpassword:cpassword
        }
        props.setFormData([...props.formData,obj])
        
    }
  return (
    <div style={{color:"yellow",margin:"90px",fontSize:"18px",background:"green",width:"350px",height:"500px",marginLeft:"550px",}}>
       <center>
        
    
<div>Sign Up</div>
        <div style={{margin:"15px"}}>
      <div style={{}}>FirstName:</div>

<input onChange={(event) =>setName(event.target.value)}placholder="enterFirstName" ></input>
</div>
<div style={{}}>LastName:</div>
<div>
<input onChange={(event) =>setLname(event.target.value)}placholder="enterLastName" ></input>
</div>
<div>
<div style={{}}>Email:</div>
<input onChange={(event) =>setEmail(event.target.value)}placholder="enteryourEmail" ></input>
</div>
<div>
<div style={{}}>Phone Number:</div>

<input onChange={(event) =>setPhone(event.target.value)}placholder="enteryourPhoneNumber" ></input>
</div>
<div>
<div style={{margin:"10px",fontSize:"18px"}}>New Password: </div>

<input onChange={(event) =>setNpassword(event.target.value)}placholder="enterYourNew Password" ></input>
</div>
<div>
<div style={{margin:"10px",fontSize:"18px"}}>Confirm Password:</div>
<input onChange={(event) =>setCpassword(event.target.value)}placholder="enterConfirmPassword" ></input>
</div>
<button  onClick={() =>dataFunction ()} style={{width:"70px",margin:"15px",background:"yellow",color:"green",cursor:"pointer",border:"none"}} type="primary" >Sign Up</button>
            <div>
                <button onClick={()=>props.setIsLogged('login')}type="primary"  style={{margin:"15px"}} >Go to Login</button>
            </div>

</center>
    </div>
  )
}

export default Sign
