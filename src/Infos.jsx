export default function Infos({res}){
    return(
      <>
   
    <h1>{res.name} {res.lastName}</h1>
   <h2>{res.email}</h2>
<h2>{res.phone}</h2>
      </>
    )
  }
  