const Events = () => {
    const handleMyEvent = (e) => {
        console.log("ativado")
    };

    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando..</h1>
        }else {
            return <h1>Também estou renderizando.</h1>
        }
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}
export default Events;