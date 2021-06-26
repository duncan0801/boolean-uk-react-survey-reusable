function TextInput({label, type, name, handleChange}) {
    return (
        <label>
            {label}
            <input
            type={type ? type : "text"}
            name={name}
            onChange={handleChange}
            />
        </label>
            
    )
}
export default TextInput
