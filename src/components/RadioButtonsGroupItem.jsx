function RadioButtonsGroupItem({groupName, value, index, }) {
    return (
        <li>
            <input 
            id={`${groupName}${value}`} 
            type="radio" 
            name={groupName} 
            value={value[index]} />
            <label htmlFor={`${groupName}${value}`}>
            {`${value}`}
            </label>
        </li>
    )
}

export default RadioButtonsGroupItem