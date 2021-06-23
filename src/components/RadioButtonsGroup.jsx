import RadioButtonsGroupItem from "./RadioButtonsGroupItem"

function RadioButtonsGroup({groupName}) {

    // function createValuesArray() {
    //     const myArray = []
    //     for(const i = 1; i <= 4; ++i) {
    //         myArray.push("i")
    //     }
    //     return myArray
    // }
    const valuesArray = [1,2,3,4]
    return (
        <ul>
        {valuesArray.map(((value, index)=> {
            return (
            <RadioButtonsGroupItem
            key={groupName + `${index}`}
            value={value}
            index={index}
            groupName={groupName}
            />
            )
        }))}
        </ul>
    )
}

export default RadioButtonsGroup

/*
INPUTS: name, values
*/