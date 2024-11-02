export default function FormContent({onChange}){
    return(
     <div  >

      <h1 className="text-center font-semibold text-2xl ">fill out the form</h1>
      <form className="flex flex-col p-20 *:rounded-md *:shadow-lg *:border-gray-400 *:w-2/5 "  >

      <label >name</label>
      <input type="text" onChange={onChange} name="name" className="bg-slate-400" id="1"  />
      <label >last Name</label>
      <input type="text" onChange={onChange} name="lastName" className="bg-slate-400" id="2" />
      <label >email</label>
      <input type="email" name="email" className="bg-slate-400" onChange={onChange} />
      <label >phone number</label>
      <input type="number" name="phone" className="bg-slate-400 " onChange={onChange} />
      </form>
     </div>
      
    )
  }

  