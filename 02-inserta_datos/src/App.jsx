const persona = {
nombre: "Juan Jose Contreras Silva",
edad: 21,
fecha_nacimiento: "23/09/02",
lugar_nacimiento: "San Juan Bautista Tuxtepec",
Signo: "Libra",
profesion: "Estudiante",
pasatiempos: [
"Escuchar musica",
"Videojuegos",
"series",
],
}
function App() {
  return (
    <div>
    <h1>Informacion Personal</h1>
    <hr />
    <ul>
    <li>Nombre: {persona.nombre}</li>
    <li>Edad: {persona.edad}</li>
    <li>Profesion: {persona.profesion}</li>
    <li>Fecha Nacimeinto: {persona.fecha_nacimiento}</li>
    <li>Lugar Nacimiento: {persona.lugar_nacimiento}</li>
    <li>Signo {persona.Signo}</li>
    <li>Profesion:</li>
     <ul>
      {
      persona.pasatiempos.map((pasatiempos) =>{
      return <li key={pasatiempos}>
        {pasatiempos}
        </li>
        })
        }
    {/*<li>Profesion: {persona.pasatiempos[0]}</li>
    <li>Profesion: {persona.pasatiempos[1]}</li>
      <li>Profesion: {persona.pasatiempos[2]}</li>*/}
     </ul>
    </ul>
    </div>


  )
}

export default App
