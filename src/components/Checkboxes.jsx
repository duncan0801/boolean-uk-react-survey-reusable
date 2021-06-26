import CheckboxItem from "./CheckboxItem";

function Checkboxes({name, answersSet, onChangeFunction}) {
    
    const values = Object.keys(answersSet)
    const innerText = Object.values(answersSet)

    return (
        <ul>
            {values.map((value, index) => {
                return (
                    <CheckboxItem
                    key={index}
                    name={name}
                    value={value}
                    innerText={innerText}
                    index={index}
                    onChangeFunction={onChangeFunction}
                    />
                )
            })}
        </ul>
    )
}

export default Checkboxes

/**
ul with multiple li's, each need a name, value, and innerText

Inputs: list to map over 
 */