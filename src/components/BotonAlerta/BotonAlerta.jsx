export default function BotonAlerta({ msj }){
    
    // Se define la funcion antes de llamarla
    const fnAlerta = () => {
        alert(msj)
    }

    return (
        <div>
            {/* La funcion se llama solo mencionandola */}
            <button onClick={fnAlerta}>Hacer clic 😊</button>
        </div>
    )
}