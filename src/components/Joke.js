import React, { useState, useTransition } from 'react'


const Joke = () => {
  const[joke,setjoke]=useState('')
  const [err,seterr]= useState('');
  const [loading,setloading] = useState(false);

const fetchjoke = async ()=>{
  setloading(true)
 try{  await fetch(`https://sv443.net/jokeapi/v2/joke/Programming?type=single`).then((res)=>(res).json())
  .then((data)=> setjoke(data.joke));
}
catch(error){
  seterr('failed to fetch joke')
}
finally{
  setloading(false)
}


}

  return (
    <div className='app'>
      <h1>Programmer Jokes</h1>
<div class="card">
  <div class="card-info">
  <h4>{joke}</h4>
        {loading ? <p>loading...</p>:<span></span>}       
        <button onClick={fetchjoke}>Show Jokes</button>
   
  </div>
</div>

    
    </div>
  )
}

export default Joke



























//""