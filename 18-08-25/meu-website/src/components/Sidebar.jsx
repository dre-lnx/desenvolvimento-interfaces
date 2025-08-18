const Sidebar = (props) => {
    return (
        <aside>
            <h3>Artigos Recomendados</h3>
            <ul>
                <li>Geopolítica - {props.artigo1}</li>
                <li>Direito - {props.artigo1}</li>
                <li>Geografia - {props.artigo1}</li>
            </ul>
        </aside>
    )
}
export default Sidebar