import React from "react";


const Button = (props) => {
    return (
        <button className={`nav-button ${props.type}`}>
            <img src={props.img} alt = "" className="svg-color"/>
            {props.children}
            {props.notifs ? props.notifs.number>0 ? <div className="notificationNumber">{props.notifs.number}</div> : console.log('no notifs') : console.log('no arguments')}
        </button>
    )
}

export default Button
