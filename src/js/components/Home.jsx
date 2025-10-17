import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [nuevaTarea, setnuevaTarea] = useState('')
const [tareas, setTareas] = useState([])


const handleChange=(event)=>{
 setnuevaTarea(event.target.value);
}

const handleSubmit =(e)=>{
	e.preventDefault();
	// setTareas([...tareas,nuevaTarea]);
tareas.push(nuevaTarea);
setTareas(tareas);
setnuevaTarea('');
}
	return (
		<form onSubmit={handleSubmit}>
		<div className="text-center">
            

			<h1 className="text-center mt-5">Todos</h1>
			<input type="text" onChange={handleChange} value={nuevaTarea}/>
			{/* <input type="text"  defaultValue={tarea} onKeyDown={handleChange}/> */}
			
			
			{/* <ul>
        {tareas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}


	<ul>
        {tareas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>




		</div>
		</form>
	);
};

export default Home;