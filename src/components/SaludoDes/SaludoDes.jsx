// Cuando solo hay una funcion, se aplica el: export default
export default function SaludoDes({nombre = "de-nombre", correo = "de-correo"}){
    return <h1>SaludoDes {nombre} - {correo}</h1>;
}