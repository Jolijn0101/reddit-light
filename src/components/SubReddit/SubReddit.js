import React from 'react';
import './SubReddit.css';
import { useSelector } from 'react-redux';
import { getSubReddits } from '../../features/Reddits/redditSlice';
import redditlogo from '../../images/reddit-logo-16.png';

const SubReddit = () => {
  const subreddits = useSelector(getSubReddits);
  return (
    <aside>
      <h1>SubReddit</h1>
      <p>Discover more subjects on Reddit!</p>
      {subreddits ? (
        subreddits.map((subReddit, index) => {
          return (
            <div className="subReddit" key={index}>
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
      ) : (
        <h1>No subreddits available</h1>
      )}
    </aside>
  );
};

export default SubReddit;
