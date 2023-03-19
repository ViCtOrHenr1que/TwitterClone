
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import './tweet.css';


interface TweetProps{
content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to ="/status" className="tweet">
      <img src="https://github.com/ViCtOrHenr1que.png" alt="Victor Henrique" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Victor Hnerique</strong>
          <span>@victorhenr1</span>
        </div>
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
          </button>
          <button type="button">
            <ArrowsClockwise />
          </button>
          <button type="button">
            <Heart />
          </button>
        </div>
      </div>
    </Link>
  );
}