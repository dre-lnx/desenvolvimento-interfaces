const Admin = (props) => {
    return (
        <div>
            <h1>Bem-vindo, {props.userType}</h1>
            <button>Gerenciar Usuários</button>
        </div>
    )
}
export default Admin