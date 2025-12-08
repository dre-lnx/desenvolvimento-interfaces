import Student from "./Student";

const ClassRoom = (props) => {
    return (
        <div>
            <h2>{props.infoTurma.nomeDaTurma}</h2>
            <p>Quantidade de estudantes {props.infoTurma.estudantes.length}</p>
            <div>
                {props.infoTurma.estudantes.map(aluno => {
                    return (
                        <div>
                        <p><b>{aluno.nome}</b></p>
                        <p>Nota: {aluno.nota}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ClassRoom;