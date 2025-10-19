import React, { useState } from "react";

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
	const obj={
		id:Date.now(),// se creo el id para identificar y eliminar
		task:nuevaTarea
	}
	//setTareas([...tareas,obj]);
	console.log(nuevaTarea);
	
	tareas.push(obj);
	setTareas(tareas);
	setnuevaTarea('');
	console.log(tareas);
}
const eliminarTarea = (id) => {
	console.log(id);
	setTareas(tareas.filter(element=>element.id!=id));
}

const placeholderText = (tareas.length==0) ? 'No hay tareas, añadir tareas' : '';
	return (
		<form onSubmit={handleSubmit}>
		<div className="container">
			<h1>Todos</h1>
			<ul>
				<li>

				{/* <input type="text" onChange={handleChange} value={nuevaTarea} placeholder="ingrese nueva tarea"/> */}
				<input type="text" onChange={handleChange} value={nuevaTarea} placeholder={placeholderText}/>
				</li>
				{tareas.map((item, index) => (
				// <li key={index}>{item.task} <i className="fa-duotone fa-solid fa-xmark img" onClick={()=>eliminarTarea(item.id)}></i></li>
					<li key={index} className="lista">
						{item.task}
						<div className="delete" onClick={()=>eliminarTarea(item.id)} >
							<i className="fa-duotone fa-solid fa-xmark img"></i>
						</div>
						
					</li>

				))}
			</ul>
			<div className="total">{tareas.length} Items</div>
		</div>
		</form>
	);
};

export default Home;