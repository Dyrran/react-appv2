function AdminPanel() {
    return <div>Panel de administrador</div>;
}

function UserPanel() {
    return <div>Panel de usuario</div>;
}

export default function ComponentOther({ isAdmin }) {
    let content;
    if ( isAdmin ) {
        content = <AdminPanel />;
    }
    else {
        content = <UserPanel />;
    }

    return <div>{content}</div>
}