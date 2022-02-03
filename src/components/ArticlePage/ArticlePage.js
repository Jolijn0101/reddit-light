import React, { useEffect } from 'react';
import './ArticlePage.css';
import Comments from '../Comments/Comments';
import FaRegArrowAltCircleUp from '../../images/arrowUp';
import FaRegArrowAltCircleDown from '../../images/arrowDown';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSelectedReddit,
  getSubReddits,
} from '../../store/Reddits/redditSlice';
import { fetchAsynccomments } from '../../store/Reddits/commentSlice';
import { validateNum, getTime, getIco } from '../../utils/data_functions';

const ArticlePage = () => {
  const data = useSelector(getSelectedReddit);
  const likes = validateNum(data.score);
  const commentsNum = validateNum(data.num_comments);
  const Time = getTime(data.created);
  const dispatch = useDispatch();
  const subreddits = useSelector(getSubReddits);

  useEffect(() => {
    dispatch(fetchAsynccomments(data.permalink));
  }, [data.permalink, dispatch]);

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
          <img
            className="IcoSubjectAP"
            src={getIco(data, subreddits)}
            alt="icosubject"
          />
          <div className="redditInformation">
            <h2 className="subjectAP">{data.subreddit_name_prefixed}</h2>
            <h3>
              • posted by u/{data.author} • {Time}
            </h3>
          </div>
        </div>
        <h2>{data.title}</h2>
        {data.is_video ? (
          <div className="video-divAP">
            <iframe
              src={data.media.reddit_video.fallback_url}
              title={data.title}
              height={data.media.reddit_video.height}
              width={data.media.reddit_video.width}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img className="articlePhotoAP" src={data.url} alt="" />
        )}
        <Comments />
        <h3 className="scoresAP">
          upvotes: {likes} • comments: {commentsNum} • awards:{' '}
          {data.total_awards_received}
        </h3>
      </div>
    </div>
  );
};

export default ArticlePage;
