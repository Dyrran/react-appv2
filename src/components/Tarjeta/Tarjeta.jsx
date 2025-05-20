function Visa(){
    return <h4>Visa: 💳</h4>
}

function Mastercard(){
    return <h4>Mastercard: 💳</h4>
}

// Por defecto se exporta Tarjeta
export default function Tarjeta({titulo, children}){
    // Los return multilinea van entre parentesis
    return (
        <div>
            <h3>{titulo}</h3>
            <div>
                {children}
            </div>
        </div>
    )
}

// Puedes llamar a Visa y Mastercard desde el App.jsx
// Si no los llamas, aparece el valor por default.
export {
    Visa,
    Mastercard
}