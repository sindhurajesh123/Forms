import React, { useState } from 'react'
import { Button, Modal,Input } from 'antd';
function Home(props) {
    const[editableName,setEditableName]=useState("")
    const[editableLname,setEditableLname]=useState("")
    const[editableEmail,setEditableEmail]=useState("")
    const[editablePhone,setEditablePhone]=useState("")
const[editableNpassword,setEditableNpassword]=useState("")
    const[editableCpassword,setEditableCpassword]=useState("")

    const[selectedIndex,setSelectedIndex]=useState(null)
    const[isOpen,setIsOpen]=useState(false);
 const onEdit=(indexNum) =>{
    setIsOpen(true);
    const selectedObj=props.formData[indexNum]
    setEditableName(selectedObj.name)
    setEditableLname(selectedObj.lname)
setEditableEmail(selectedObj.email)
 setEditablePhone(selectedObj.phone)
    setEditableNpassword(selectedObj.npassword)
     setEditableCpassword(selectedObj.cpassword)
     setSelectedIndex(indexNum)
 }
 const update=()=>{
    let obj ={
    name:editableName,
    lname:editableLname,
    email:editableEmail,
    phone:editablePhone,
    npassword:editableNpassword,
    cpassword:editableCpassword,
    }
    let ouput=[]

 for (let i in props.formData){
     if(i!=selectedIndex){
        ouput.push(props.formData[i])
    }else{
        ouput.push(obj)
    }
 }
 props.setFormData(ouput)
 setIsOpen(false);
 }
 const onDelete =(index)=>{
    console.log('selectedIndex:',index)
    let output = []
    for(let i in props.formData){
        if(i!=index){
            output.push(props.formData[i])
        }
    } 
        
    
  props.setFormData(output)
}
     
  return (

    <div>
      <h1>Home page</h1>
      <div>
      
      
          
           
              <table border={1}width="40%"align="right"cellPadding={10}>
              
    
                <tr>
                <th>First Name</th>
                <th>LastName  </th>
                <th> Email</th>
                <th>Phone Number</th>
                <th>New password</th>
                <th>Confirm password</th>
                </tr>
      {
                props.formData.map((item,num)=>{
                    console.log(props)
                        return (
                            <>
                            <tr>
                                <td>{item.name}</td>
                                <td> {item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.npassword}</td>
                                <td>{item.cpassword}</td>
                                <button onClick={()=>onEdit(num)}>Edit</button>
                                <button onClick={()=>onDelete(num)}>Delete</button>
                                </tr>
                                </>
                            )
                        })
                    }
                    </table>
                    
                    </div>
                    <div>       
     <button onClick={()  =>props.setIsLogged('login')}  style={{margin:"10px"}}>Go to Login</button>
    </div>
    <Modal title="Basic Modal" open={isOpen} onOk={update} onCancel={()  =>
      setIsOpen(false)}>
        <div>
      <div>Editable data</div>
    <div style={{margin:"20px 0px",width:"50%"}}>
     <Input  value={editableName} onChange={(e) => setEditableName(e.target.value)}></Input>
     <Input  value={editableLname} onChange={(e) => setEditableLname(e.target.value)}></Input>
 <Input  value={editableEmail} onChange={(e) => setEditableEmail(e.target.value)}></Input>
 <Input  value={editablePhone} onChange={(e) => setEditablePhone(e.target.value)}></Input>
 <Input  value={editableNpassword} onChange={(e) => setEditableNpassword(e.target.value)}></Input>
 <Input  value={editableCpassword} onChange={(e) => setEditableCpassword(e.target.value)}></Input>
 </div>     
    </div>
    </Modal>
      
   </div> 
  )
}

export default Home
