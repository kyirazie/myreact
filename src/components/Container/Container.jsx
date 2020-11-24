import "./Container.css";

const Container =(props)=>{
    return (
        <section className="container" style={{
            backgroundImage `url(${props.bgimages})`,
            color: props.color,
            backgroundSize: props.bgsize
            }}
            >
                        
            <h1>{props.title}</h1>
            <p>{props.body}</p>
    )

}