import { Checkbox } from "@mantine/core";
import React, { useState } from "react";
import './checkboxes.css'

export function Checkboxes(props: any) {

    // Add/Remove checked item from list
    const handleCheck = (event: { target: { checked: any; value: any; }; }) => {
        var updatedList: string[] = [...props.checked];
        if (event.target.checked) {
            updatedList = [...props.checked, event.target.value];
        } else {
            updatedList.splice(props.checked.indexOf(event.target.value), 1);
        }
        props.setChecked(updatedList);
    };

    return (
        <div className="app">
            <h3>{props.title}</h3>
            {props.checklist.map((item: any, index: any) => (

                    <Checkbox  key={index} className="checkBox" value={item} label={item} checked={props.checked.includes(item)} onChange={handleCheck}/>

            ))}
        </div>
    );
}