import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './timeline.css';

export function Timeline() {


  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets]  = useState([
    "teste de tweet 1 ",
    "teste de tweet 2 ",
    "teste de tweet 3 ",
    "teste de tweet 4 ",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
    
  }
    function handleHotKeySubmit(event: KeyboardEvent) {
      if ((event.key === "Enter" && event.ctrlKey) || event.metaKey) {
        setTweets([newTweet, ...tweets]);
        setNewTweet("");
      }
    }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/ViCtOrHenr1que.png"
            alt="Victor Henrique"
          />
          <textarea
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
            id="tweet"
            placeholder="What's Happening ?"
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
