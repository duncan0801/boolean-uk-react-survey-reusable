function CheckboxItem({name, value, innerText, index }) {
    return (
        <li>
            <label>
                <input name={name} type="checkbox" value={value} />{innerText[index]}
            </label>
        </li>
)
}
export default CheckboxItem