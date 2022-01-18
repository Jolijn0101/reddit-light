import React from 'react';
import './ArticlePage.css';
import IcoSubject from '../images/IcoSubject.png';
import CakePhoto from '../images/3zv7yahmtj981.jpg';
import Comment from './Comment';

const ArticlePage = () => {
  return (
    <article>
      <div className="counter-divAP">
        {/* arrow up */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"></path>
        </svg>
        <h3 className="counterAP">25</h3>
        {/* arrow down */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"></path>
        </svg>
      </div>
      <div className="article-contentAP">
        <h3>← Back to reddits page</h3>
        <div className="headerAP">
          <img className="IcoSubjectAP" src={IcoSubject} alt="icosubject" />
          <h2 className="subjectAP">r/Baking</h2>
          <h3>• posted by u/Sparklypenwhore • 13 days ago</h3>
        </div>
        <h2>
          Finally perfected my chocolate cake recipe! And living my best
          sprinkle life ✨
        </h2>
        <img className="articlePhotoAP" src={CakePhoto} alt="" />
        <div className="comments">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <h3 className="scoresAP">upvotes: 25 • commants: 12 • awards: 5</h3>
      </div>
    </article>
  );
};

export default ArticlePage;
