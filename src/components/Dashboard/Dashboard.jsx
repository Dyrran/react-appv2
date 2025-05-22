let AdminPanel = () => <h1>Administrator Panel</h1>
let UserPanel = () => <h1>User Panel</h1>

export default function Dashboard({ isAdmin }) {
    let Panel = isAdmin ? AdminPanel : UserPanel;
    return <Panel />;
}