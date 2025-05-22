let UserDashboard = () => (
    <div>
        <h1>Welcome to my dashboard</h1>
    </div>
)

let LoginButton = () => (
    <div>
        <h1>Login</h1>
        <button>Sign in</button>
    </div>
)

function ComponentLogin({ isLoggedIn }) {
    return (
        <div>
            {/* Aqui se incluyen los componentes por funciones */}
            {/* { isLoggedIn ? <UserDashboard/> : <LoginButton/> } */}

            {/* Aqui se incluye el contenido de los componentes directamente */}
            {isLoggedIn
                ? <h1>Welcome to my dashboard</h1>
                : (
                    <div>
                        <h1>Login</h1>
                        <button>Sign in</button>
                    </div>
                )
            }
        </div>
    )
}

export default function Component({ userName }) {
    return (
        <div>
            <p>Usuario:</p>
            {userName || "Usuario anonimo"}
        </div>
    )
}

export {
    ComponentLogin
}