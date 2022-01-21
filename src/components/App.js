import './App.css';
import reddit_light_logo from '../images/reddit_light_logo.png';
import Articles from './Articles';
import SubReddit from './SubReddit';
import ArticlePage from './ArticlePage';
import { useState } from 'react';

function App() {
  const [term, setTerm] = useState('Search on Reddit');
  const [clicked, setclicked] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please enter search term!');
    console.log(term);
    setTerm('');
  };

  return (
    <div className="App">
      <nav>
        <img src={reddit_light_logo} alt="reddit_light_logo" />
        <form onSubmit={submitHandler}>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </nav>
      <main>
        {clicked ? <ArticlePage /> : <Articles />}
        <SubReddit />
      </main>
    </div>
  );
}

export default App;
