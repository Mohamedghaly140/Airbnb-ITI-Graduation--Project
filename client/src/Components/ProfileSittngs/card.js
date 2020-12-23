import React from "react";
import "./card.css";

const Card = (props) => {
    let Icon = props.icon;
    return (
            <div className="card shadow bg-white rounded" onClick={props.push}>
                <div className="card-img-top">
                    {props.children}
                </div>
                <div className="card-body">
                    <h5 className="card-title"><b>{props.titel}</b></h5>
                    <p className="card-text">{props.dis}</p>
            </div>
        </div>

    )
}

export default Card;