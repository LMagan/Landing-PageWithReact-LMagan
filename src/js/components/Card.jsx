import React from "react";


const Card = (props) => {
    return (
        <div className="card m-2" style={{width: '18rem'}}>
            <img src={props.imageUrl} className="card-img-top"  alt="some img" />
            <div className="card-body">
                <h5 className="card-title">Más Memes</h5>
                <p className="card-text">Cuando tu código funciona y no sabes por qué... pero igual lo celebras.</p>
                <a href="#" className="btn btn-primary">Click for more!</a>
            </div>
        </div>
    )
}

export default Card;