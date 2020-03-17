import React from 'react';
import * as moment from "moment";

let Todo = props => {
    const timeStamp = props.id;
    const formatted = moment(timeStamp).format("LLLL");
    return (
        <div onClick={() => props.toggleTask(props.id)} className="flex">
            <h3>
                {props.status ? <i className="fas fa-check-circle"></i> : <i className="far fa-check-circle"></i>}
                 {props.name}
            </h3>
            <p className="red-text">{props.status ? ' - Completed' : ' - Incomplete'}</p>
            <p className="red-text"><br />Created {moment(formatted).fromNow()}</p>
        </div>
    )
}

export default Todo;