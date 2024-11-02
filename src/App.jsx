import Infos from "./Infos";
import Form from "./Form";
import { useState } from "react";
const myResume = [
  {
    id: 1,
    name: "youcef",
    lastName: "riah",
    email:"youcefriah04@gmail.com",
    phone:780238421,
  },
];

export default function App() {
  const [resume, setResume] = useState(myResume);

  function handleChange(e) {
    const { value, name, id } = e.target;
    console.log(id);
    setResume((curState) =>
      curState.map((res) => ( { ...res, [name]: value } ))
    );
  }
// TODO: 
// -update the font weights 
// -add more forms and section
// -add a submit that saves everything in the Array
// -add an eddit btn
// -style the cv


  return (
    <div className="text-white " >
      <h1 className="text-center">fill out your resume</h1>
    <div className="flex flex-row gap-4  h-screen  content-center ">
     
      <section className="rounded w-1/2 m-7 bg-slate-700  shadow-md">
        <Form label={["name", "lastName"]} onChange={handleChange} />
      </section>
      <section className=" m-7 w-1/2 bg-slate-400 shadow-xl ">
      <h1 className=" h-7 text-center">Your resume</h1>
        {resume.map((res) => (
          <Infos key={res.id} res={res} />
        ))}
      </section>
     
    </div>
    </div>
  );
}
