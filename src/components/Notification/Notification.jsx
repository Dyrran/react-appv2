export default function Notification({hasMessages}) {
    return (
        <div>
            📫 Buzón:
            { hasMessages && <p>¡Tienes mensajes nuevos!</p>}
        </div>
    )
}