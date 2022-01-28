import React from 'react';
import './ArticlePage.css';
import IcoSubject from '../../images/IcoSubject.png';
import CakePhoto from '../../images/3zv7yahmtj981.jpg';
import Comment from '../Comment/Comment';
import FaRegArrowAltCircleUp from '../../images/arrowUp';
import FaRegArrowAltCircleDown from '../../images/arrowDown';
import { Link } from 'react-router-dom';

const ArticlePage = () => {
  return (
    <div className="articlePage">
      <div className="counter-divAP">
        {/* arrow up */}
        <FaRegArrowAltCircleUp className="arrow-up" />
        <h3 className="counterAP">25</h3>
        {/* arrow down */}
        <FaRegArrowAltCircleDown className="arrow-down" />
      </div>
      <div className="article-contentAP">
        <Link to="/">
          <h3>← Back to reddits page</h3>
        </Link>
        <div className="headerAP">
          <img className="IcoSubjectAP" src={IcoSubject} alt="icosubject" />
          <div className="redditInformation">
            <h2 className="subjectAP">r/Baking</h2>
            <h3>• posted by u/Sparklypenwhore • 13 days ago</h3>
          </div>
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
    </div>
  );
};

export default ArticlePage;