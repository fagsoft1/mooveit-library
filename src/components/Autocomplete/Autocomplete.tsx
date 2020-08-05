import React, {useState, useMemo} from "react";
import {IInputBase, InputBase} from "../InputBase/InputBase";
import '../../stylesCCS.css';

interface IAutocomplete extends Omit<IInputBase, 'children'> {
    options: [string]
}

const Autocomplete = (
    {
        label,
        name,
        options,
    }: IAutocomplete) => {
    const [active_option, setActiveOption] = useState(0);
    const [show_options, setShowOptions] = useState(false);
    const [user_input, setUserInput] = useState('');

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setShowOptions(true);
        setActiveOption(0);
        setUserInput(e.currentTarget.value);
    };

    const filteredOptions = useMemo(() => {//to avoid to be recalculated when keyDown event
        return options.filter((option: string) => option.toLowerCase().indexOf(user_input.toLowerCase()) > -1);
    }, [user_input]);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const active_limit = filteredOptions.length - 1;
        switch (e.keyCode) {
            case 13: //Enter
                setActiveOption(0);
                setShowOptions(false);
                setUserInput(filteredOptions[active_option]);
                break;
            case 38: //ArrowUp
                if (active_option === 0) {
                    return;
                }
                setActiveOption(active_option - 1);
                break;
            case 40://ArrowDown
                if (active_option === active_limit) {
                    setActiveOption(active_limit);
                } else {
                    setActiveOption(active_option + 1);
                }
                break;
        }
    };

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        setActiveOption(0);
        setShowOptions(false);
        setUserInput(e.currentTarget.innerText);
    };

    let optionList = null;
    if (show_options && user_input) {
        if (filteredOptions.length) {
            optionList = (
                <ul className="options">
                    {filteredOptions.map((optionName, index) => {
                        let className;
                        if (index === active_option) {
                            className = 'option-active';
                        }
                        return (
                            <li className={className} key={optionName} onClick={onClick}>
                                {optionName}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            optionList = (
                <div className="no-options">
                    <em>No Option!</em>
                </div>
            );
        }
    }

    return <InputBase label={label} name={name}>
        <div>
            <input
                type="text"
                className="search-box"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={user_input}
            />
            {optionList}
        </div>
    </InputBase>
}

export {Autocomplete}