import React from 'react';
import './Article.css';
import FaRegArrowAltCircleUp from '../images/arrowUp';
import FaRegArrowAltCircleDown from '../images/arrowDown';
import { Link } from 'react-router-dom';
import { validateNum, getTime, getIco } from '../utils/data_functions';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedReddit } from '../store/redditSlice';
import { getSubReddits } from '../store/subredditSlice';

const Article = (props) => {
  const dispatch = useDispatch();
  const data = props.data;
  const likes = validateNum(data.score);
  const comments = validateNum(data.num_comments);
  const Time = getTime(data.created);
  const subreddits = useSelector(getSubReddits);

  return (
    <>
      <article>
        <div className="counter-div">
          {/* arrow up */}
          <FaRegArrowAltCircleUp className="arrow-up" />
          <h3 className="counter">{likes}</h3>
          {/* arrow down */}
          <FaRegArrowAltCircleDown className="arrow-down" />
        </div>
        <Link to={'/reddit-light/articleID:' + data.id}>
          <div
            className="article-content"
            onClick={() => dispatch(setSelectedReddit(data))}
          >
            <div className="header">
              <img
                className="IcoSubject"
                src={getIco(data, subreddits)}
                alt="icosubject"
              />
              <div className="redditInformation">
                <h2 className="subject">{data.subreddit_name_prefixed}</h2>
                <h3>
                  • posted by u/{data.author} • {Time}
                </h3>
              </div>
            </div>
            <h2>{data.title}</h2>
            {data.is_video ? (
              <div className="video-div">
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
              <img className="articlePhoto" src={data.url} alt="" />
            )}
            <h3>
              upvotes: {likes} • comments: {comments} • awards:{' '}
              {data.total_awards_received}
            </h3>
          </div>
        </Link>
      </article>
    </>
  );
};

export default Article;
