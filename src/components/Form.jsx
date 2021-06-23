import Checkboxes from "./Checkboxes"
import {answersSet} from "./AnswersItem"
import {answersSetTwo} from "./AnswersItem"
import RadioButtonsGroup from "./RadioButtonsGroup"

function Form() {
 return (
    <form className="form">
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            <Checkboxes
            name={"bestFeatures"} //Takes a name for the checkboxes
            answersSet={answersSet} // An object with {value: "InnerText", ...}
            />
        </div>
        <div className="form__group">
            <h3>What would you say that are the worst bits of your rubber duck?</h3>
            <Checkboxes
            name={"worstFeatures"}
            answersSet={answersSet}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <RadioButtonsGroup
            groupName={"consistency"}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtonsGroup
            groupName={"colour"}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <RadioButtonsGroup
            groupName={"logo"}
            />
        </div>
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes
            name={"timeSpent"}
            answersSet={answersSetTwo}
            />
        </div>
        <label
            >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            ></textarea>
            </label>
            <label
            >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            />
            </label>
            <label
            >Leave us your email pretty please??<input
            type="email"
            name="email"
            />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
    )
}

export default Form