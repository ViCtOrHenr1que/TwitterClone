import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo..",
    "Faz sentido",
    "Parabens pelo progresso",
  ]);

  function createNewAsnwer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === "Enter" && event.ctrlKey || event.metaKey){
          setAnswers([newAnswer, ...answers]);
          setNewAnswer("");
    }
    
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed dolore, nulla tempora eius itaque perspiciatis aspernatur reprehenderit velit dolorum nam cumque? Reiciendis sapiente enim pariatur dolorum porro ex error!" />
      <Separator />
      <form onSubmit={createNewAsnwer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/ViCtOrHenr1que.png"
            alt="Victor Henrique"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown = {(handleHotKeySubmit)}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit"> <PaperPlaneRight/> <span>Answer</span> </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}
