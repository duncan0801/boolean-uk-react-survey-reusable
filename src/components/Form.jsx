import Checkboxes from "./Checkboxes"
import {answersSet} from "./AnswersItem"
import {answersSetTwo} from "./AnswersItem"
import RadioButtonsGroup from "./RadioButtonsGroup"
import { useState } from "react"
import TextInput from "./TextInput"

function Form(props) {


const [answers, setAnswers] = useState({
    username: "",
    email: "",
    logo: "",
    colour: "",
    consistency: "4",
    timeSpent: ["bathing"],
    review: "",
    bestFeatures: [],
    worstFeatures: []
    });

    function handleSubmit(event) {
    event.preventDefault();
    props.addAnswer(answers);
    setAnswers(initialFormState);
    }

    function handleChange(event) {
        console.log(event.target.name)
        console.log(event.target.value)
    setAnswers({ ...answers, [event.target.name]: event.target.value });
    }

    function handleCheckboxGroupChange(event) {
    const updatedArray = event.target.checked
        ? [...answers[event.target.name], event.target.value]
        : answers[event.target.name].filter(
            (feature) => feature !== event.target.value
        );

    setAnswers({ ...answers, [event.target.name]: updatedArray });
    }

    function handleRadioButtonChange(event) {
        console.log(event)
    }
    
 return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            <Checkboxes
            name={"bestFeatures"} //Takes a name for the checkboxes
            answersSet={answersSet} // An object with {value: "InnerText", ...}
            onChangeFunction={handleCheckboxGroupChange}
            />
        </div>
        <div className="form__group">
            <h3>What would you say that are the worst bits of your rubber duck?</h3>
            <Checkboxes
            name={"worstFeatures"}
            answersSet={answersSet}
            onChangeFunction={handleCheckboxGroupChange}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <RadioButtonsGroup
            groupName={"consistency"}
            onChangeFunction={handleChange}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtonsGroup
            groupName={"colour"}
            onChangeFunction={handleChange}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <RadioButtonsGroup
            groupName={"logo"}
            onChangeFunction={handleChange}
            />
        </div>
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes
            name={"timeSpent"}
            answersSet={answersSetTwo}
            onChangeFunction={handleCheckboxGroupChange}
            />
        </div>
        <label
            >What else have you got to say about your rubber duck?
            <textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange}
            ></textarea>
        </label>
        <TextInput
        label={"Put your name here (if you feel like it)"}
        type={"text"}
        name={"username"}
        onChange={handleChange}
        />
        <label>
            Put your name here (if you feel like it):
            <input
            type="text"
            name="username"
            onChange={handleChange}
            />
        </label>
        <TextInput
        label={"Leave us your email"} 
        type={"email"} 
        name={"email"}
        handleChange={handleChange}/>
        <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
    )
}

export default Form