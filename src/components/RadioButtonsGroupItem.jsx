function RadioButtonsGroupItem({groupName, value, index, onChangeFunction }) {
    return (
        <li>
            <input 
            id={`${groupName}${value}`} 
            type="radio" 
            onChange={onChangeFunction}
            name={groupName} 
            value={`${value}`} />
            <label htmlFor={`${groupName}${value}`}>
            {`${value}`}
            </label>
        </li>
    )
}

export default RadioButtonsGroupItem