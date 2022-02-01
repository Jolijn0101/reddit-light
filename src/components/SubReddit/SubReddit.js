import React from 'react';
import './SubReddit.css';
import '../../animations/loadingAnimation.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSubReddits,
  fetchAsyncSubRedditPosts,
  getSubLoading,
} from '../../features/Reddits/redditSlice';
import redditlogo from '../../images/reddit-logo-16.png';

const SubReddit = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(getSubReddits);
  const subLoading = useSelector(getSubLoading);
  return (
    <aside>
      <h1>SubReddit</h1>
      <p>Discover more subjects on Reddit!</p>
      {subLoading || !subreddits ? (
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        subreddits.map((subReddit, index) => {
          return (
            <div
              className="subReddit"
              key={index}
              onClick={() =>
                dispatch(fetchAsyncSubRedditPosts(subReddit.display_name))
              }
            >
              {subReddit.icon_img ? (
                <img
                  className="icon"
                  src={subReddit.icon_img}
                  alt={subReddit.display_name + 'icon'}
                />
              ) : (
                <img
                  className="icon"
                  src={redditlogo}
                  alt={subReddit.display_name + 'icon'}
                />
              )}

              <h3>{subReddit.display_name}</h3>
            </div>
          );
        })
      )}
    </aside>
  );
};

export default SubReddit;
