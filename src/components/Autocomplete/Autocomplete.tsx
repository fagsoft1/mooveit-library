import React, {useState, useMemo} from 'react';
import InputBase from '@components/InputBase/InputBase';
import '../../stylesCCS.css';

import IAutocomplete from '@components/Autocomplete/Autocomplete.types';

const Autocomplete: React.FC<IAutocomplete> = ({label, name, options}: IAutocomplete) => {
    const [activeOption, setActiveOption] = useState(0);
    const [showOptions, setShowOptions] = useState(false);
    const [userInput, setUserInput] = useState('');

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setShowOptions(true);
        setActiveOption(0);
        setUserInput(e.currentTarget.value);
    };

    const filteredOptions = useMemo(() => {
        // to avoid to be recalculated when keyDown event
        return options.filter((option: string) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
    }, [userInput]);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const activeLimit = filteredOptions.length - 1;
        switch (e.keyCode) {
            case 13: // Enter
                setActiveOption(0);
                setShowOptions(false);
                setUserInput(filteredOptions[activeOption]);
                break;
            case 38: // ArrowUp
                if (activeOption === 0) {
                    return;
                }
                setActiveOption(activeOption - 1);
                break;
            case 40: // ArrowDown
                if (activeOption === activeLimit) {
                    setActiveOption(activeLimit);
                } else {
                    setActiveOption(activeOption + 1);
                }
                break;
            default:
                break;
        }
    };

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        setActiveOption(0);
        setShowOptions(false);
        setUserInput(e.currentTarget.innerText);
    };

    let optionList = null;
    if (showOptions && userInput) {
        if (filteredOptions.length) {
            optionList = (
                <ul className="options">
                    {filteredOptions.map((optionName, index) => {
                        let className;
                        if (index === activeOption) {
                            className = 'option-active';
                        }
                        return (
                            <li role="presentation" className={className} key={optionName} onClick={onClick}>
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

    return (
        <InputBase label={label} name={name}>
            <div>
                <input type="text" className="search-box" onChange={onChange} onKeyDown={onKeyDown} value={userInput} />
                {optionList}
            </div>
        </InputBase>
    );
};

export default Autocomplete;
