import React, { useState } from 'react'

const Submission = () => {
 const [fname,setfname] = useState("");
 const [lname,setlname] = useState("");
 const [email,setemail] = useState("");
 const [cnum,setcnum] = useState(0);
 const [gender,setgender]= useState();
 const [about,setabout] = useState();
 
 const show=()=>{
  console.log(fname,
    lname,
    email,
    cnum,
  gender,
about);
 }
  return (
     
     <>
          <div className='app'>
            <h1>React Form</h1> 
            <div className="container">
            <span >First Name*</span>
            <input onChange={(event)=>setfname(event.target.value)} type="text" placeholder='Enter First Name' />
            <span >Last Name*</span>
            <input onChange={(e)=>setlname(e.target.value)} type="text" placeholder='Enter Last Name' />
            <span >Email*</span>
            <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email Id' />
            <span >Contact*</span>
            <input type="number" onChange={(e)=>setcnum(e.target.value)} placeholder='Enter Contact Number' />
            <span >Select Gender*</span> <div className="gcon">
            <input type="radio" onChange={(e)=>setgender(e.target.value)} name='gender' value={"male"} />Male
             <input type="radio" onChange={(e)=>setgender(e.target.value)} name='gender' value={"female"} /> Female
             <input type="radio" onChange={(e)=>setgender(e.target.value)}  name='gender' value={"other"} />Other 
            </div>  
            <span>About*</span>
            <textarea placeholder='About Your Self' onChange={(e)=>setabout(e.target.value)} ></textarea> 
           <div className="btncont"> <button>Reset</button> <button onClick={show}> Submit</button></div>
            </div>
          </div>
     
     
     </>

  )
}

export default Submission