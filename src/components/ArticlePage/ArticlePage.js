import React from 'react';
import './ArticlePage.css';
import IcoSubject from '../../images/IcoSubject.png';
import CakePhoto from '../../images/3zv7yahmtj981.jpg';
import Comment from '../Comment/Comment';
import FaRegArrowAltCircleUp from '../../images/arrowUp';
import FaRegArrowAltCircleDown from '../../images/arrowDown';
import { validateNum, getTime } from '../../features/data_functions';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelectedReddit } from '../../features/Reddits/redditSlice';

const ArticlePage = () => {
  const data = useSelector(getSelectedReddit);
  const likes = validateNum(data.score);
  const comments = validateNum(data.num_comments);
  const Time = getTime(data.created);

  return (
    <div className="articlePage">
      <div className="counter-divAP">
        {/* arrow up */}
        <FaRegArrowAltCircleUp className="arrow-up" />
        <h3 className="counterAP">{likes}</h3>
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
            <h2 className="subjectAP">{data.subreddit_name_prefixed}</h2>
            <h3>
              • posted by u/{data.author} • {Time}
            </h3>
          </div>
        </div>
        <h2>{data.title}</h2>
        <img className="articlePhotoAP" src={CakePhoto} alt="" />
        <div className="comments">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <h3 className="scoresAP">
          upvotes: {likes} • commants: {comments} • awards:{' '}
          {data.total_awards_received}
        </h3>
      </div>
    </div>
  );
};

export default ArticlePage;
