const News = (props) => {
    return (
        <section>
            <h2>Últimas notícias</h2>
            <p>Inédito: {props.news1}</p>
            <p>Bafafá: {props.news2}</p>
        </section>
    )
}
export default News