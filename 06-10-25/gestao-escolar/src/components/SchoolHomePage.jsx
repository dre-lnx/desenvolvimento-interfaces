import styles from './SchoolHomePage.module.css'

const SchoolHomePage = () => {

    const showDialog = () => {
        alert('Bem-vindo ao sistema de gestão escolar!')
    }

    return (
        <div className={styles.homeContainer}>
            <h1>Escola ABC</h1>
            <div>Bem-vindo ao sistema de gestão escolar. Aqui você pode gerenciar turmas, estudantes e muito mais</div>
            <button onClick={showDialog}>Acessar Sistema</button>
        </div>
    )
}

export default SchoolHomePage;