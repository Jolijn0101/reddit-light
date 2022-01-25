import React from 'react';
import './Article.css';
import IcoSubject from '../../images/IcoSubject.png';
import CakePhoto from '../../images/3zv7yahmtj981.jpg';
import { useState } from 'react/cjs/react.development';
import FaRegArrowAltCircleUp from '../../images/arrowUp';
import FaRegArrowAltCircleDown from '../../images/arrowDown';
import { Link } from 'react-router-dom';

const Article = () => {
  let [counter, setcounter] = useState(26);
  let [liked, setliked] = useState(false);

  const countOn = () => {
    if (!liked) {
      setcounter((counter += 1));
      setliked(true);
    } else {
      return;
    }
  };
  const countOff = () => {
    if (liked) {
      setcounter((counter -= 1));
      setliked(false);
    } else {
      return;
    }
  };
  return (
    <>
      <article>
        <div className="counter-div">
          {/* arrow up */}
          <FaRegArrowAltCircleUp className="arrow-up" onClick={countOn} />
          <h3 className="counter">{counter}</h3>
          {/* arrow down */}
          <FaRegArrowAltCircleDown className="arrow-down" onClick={countOff} />
        </div>
        <Link to="/articlepage">
          <div className="article-content">
            <div className="header">
              <img className="IcoSubject" src={IcoSubject} alt="icosubject" />
              <div className="redditInformation">
                <h2 className="subject">r/Baking</h2>
                <h3>• posted by u/Sparklypenwhore • 13 days ago</h3>
              </div>
            </div>
            <h2>
              Finally perfected my chocolate cake recipe! And living my best
              sprinkle life ✨
            </h2>
            <img className="articlePhoto" src={CakePhoto} alt="" />
            <h3>upvotes: {counter} • commants: 12 • awards: 5</h3>
          </div>
        </Link>
      </article>
      <article>
        <div className="counter-div">
          {/* arrow up */}
          <FaRegArrowAltCircleUp className="arrow-up" onClick={countOn} />
          <h3 className="counter">{counter}</h3>
          {/* arrow down */}
          <FaRegArrowAltCircleDown className="arrow-down" onClick={countOff} />
        </div>
        <div className="article-content">
          <div className="header">
            <img className="IcoSubject" src={IcoSubject} alt="icosubject" />
            <div className="redditInformation">
              <h2 className="subject">r/Baking</h2>
              <h3>• posted by u/Sparklypenwhore • 13 days ago</h3>
            </div>
          </div>
          <h2>
            Finally perfected my chocolate cake recipe! And living my best
            sprinkle life ✨
          </h2>
          <h3>upvotes: {counter} • commants: 12 • awards: 5</h3>
        </div>
      </article>
      <article>
        <div className="counter-div">
          {/* arrow up */}
          <FaRegArrowAltCircleUp className="arrow-up" onClick={countOn} />
          <h3 className="counter">{counter}</h3>
          {/* arrow down */}
          <FaRegArrowAltCircleDown className="arrow-down" onClick={countOff} />
        </div>
        <div className="article-content">
          <div className="header">
            <img className="IcoSubject" src={IcoSubject} alt="icosubject" />
            <div className="redditInformation">
              <h2 className="subject">r/Baking</h2>
              <h3>• posted by u/Sparklypenwhore • 13 days ago</h3>
            </div>
          </div>
          <h2>
            Finally perfected my chocolate cake recipe! And living my best
            sprinkle life ✨
          </h2>
          <div className="video-div">
            <iframe
              src="https://www.youtube.com/embed/Bj1ynm-90PM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3>upvotes: {counter} • commants: 12 • awards: 5</h3>
        </div>
      </article>
    </>
  );
};

export default Article;
