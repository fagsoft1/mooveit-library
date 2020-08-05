import React, {Fragment} from "react";
import {InputBase, IInputBase} from "../InputBase/InputBase";

interface ISelectInputItem {
    value: number | string,
    text: string
}

interface ISelectInput extends IInputBase {
    options: [ISelectInputItem],
    multiple?: boolean
}

const SelectInput = ({options, name, label, multiple = false}: ISelectInput) => {
    return <Fragment>
        <InputBase label={label} name={name}>
            <select
                name={name}
                id={name}
                multiple={multiple}
            >
                {options.map(e => <option key={e.value} value={e.value}>{e.text}</option>)}
            </select>
        </InputBase>
    </Fragment>
}
export {SelectInput}