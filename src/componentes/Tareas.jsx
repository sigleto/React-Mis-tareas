import { useState } from "react"
function Tareas(){
    const[input,setInput]=useState('');
    const[tareas,setTareas]=useState([]);
//funcion cambiar contenido del input 
   const Cambiar=(e)=>{
    e.preventDefault()
    setInput("marcos")
   }
   //funcion para capturar contenido del input
   const Capturar=(e)=>{
    const valor=e.target.value
    setInput(valor)
   }
   //funcion para transformar el input en un objeto y agregarlo a "tareas"
   const Transformar=(e)=>{
    e.preventDefault()
    const nuevo={
        titulo:input,
        id:1+(Math.random()*100),
        completado:false
       }
       const temp=[...tareas];
       temp.push(nuevo)
       setTareas(temp)
       console.log(temp)
   
    }
    //Función para borrar tareas
    const Borrar=(id)=>{
       
      const nuevos=tareas.filter(item=>item.id!=id)
        setTareas(nuevos)
    }
    //Función para editar tareas
    const Editar=(id)=>{
      const nombre="";
      tareas.titulo=nombre;
      setInput(nombre)
    }
   


    return(
        <div>
         <form onSubmit={Transformar}>
        <input onChange={Capturar} placeholder="escribe tarea" />
        <button >Agregar</button>
        </form>

        <div >
           {tareas.map(item=>(<div key={item.id}>{item.titulo}<button onClick={()=>Borrar(item.id)}>Borrar</button></div>))
            }
           
        </div>
         

        </div>
        
        
    )
}
export default Tareas