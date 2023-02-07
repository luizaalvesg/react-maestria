const TemplateExpressions = () => {
    const name = "Luiza";
    const data = {
        age:31,
        job: 'programador'
    }

    return(
        <div>
            <p>oi {name}</p>
            <p>você é {data.job} ?</p>
        </div>
    )
}

export default TemplateExpressions;