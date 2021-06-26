function CheckboxItem({name, value, innerText, index, onChangeFunction}) {
    return (
        <li>
            <label>
                <input name={name} type="checkbox" value={value} onChange={onChangeFunction} />{innerText[index]}
            </label>
        </li>
)
}
export default CheckboxItem