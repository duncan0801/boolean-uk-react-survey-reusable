import { useState } from "react";
import Form from "./Form";

function Main() {
  const formDataTemplate = {
    username: "",
    email: "",
    logo: "",
    colour: "",
    consistency: "",
    timeSpent: [],
    review: "",
    bestFeatures: [],
    worstFeatures: []
  }
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswerList] = useState([]);

  function addAnswer(answers) {
    setAnswerList([...answersList, answers]);
  }


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <Form
        addAnswer={addAnswer}
        />
      </section>
    </main>
  );
}

export default Main;
