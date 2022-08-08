import React from 'react'
import affairs from "./Affairs";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (TaskID:number) => void  // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id:number) => {props.deleteAffairCallback(id)}// need to fix

    return (
        <li>
            Задача: {props.affair.name}
            Приоритет: {props.affair.priority}
            <button onClick={ () =>deleteCallback(props.affair._id)}>X</button>
        </li>
    )
}

export default Affair
