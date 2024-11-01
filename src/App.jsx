
import { useState } from "react"
const myResume=[{
  id:1,
  name:'youcef',
  lastName:'riah'
}]

export default function App() {
 const [resume,setResume]=useState(myResume)

  function handleChange(e){
  const {value,name,id}=e.target
  console.log(id)
  setResume((curState)=>curState.map((res)=>res=id?{...res,[name]:value}:res))
  }

return(
  
  <div className="flex  flex-row-reverse">

{resume.map((res)=>(
  <Infos className=" flex-none w-64 p-6 m-6 " key={res.id} res={res}/>
))}

<Form className="flex-none w-64" label={['name','lastName']} onChange={handleChange}/>
</div>
 

)
}

function Infos({res}){
  return(
    <>
 
  <h1>{res.name} {res.lastName}</h1>
 
    </>
  )
}

function Form({onChange,label}){
  return(
    <>
    <label >{label[0]}</label>
    <input type="text" onChange={onChange} name="name" id="1" />
    <label >{label[1]}</label>
    <input type="text" onChange={onChange} name="lastName" id="2" />
    </>
  )
}