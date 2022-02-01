import React from 'react';
import './Articles.css';
import '../../animations/loadingAnimation.css';
import Article from '../Article/Article';
import { useSelector } from 'react-redux';
import { getAllReddits } from '../../features/Reddits/redditSlice';

const Articles = () => {
  const reddits = useSelector(getAllReddits);
  return (
    <div id="articles">
      {reddits ? (
        reddits.map((reddit, index) => {
          return <Article key={index} data={reddit} />;
        })
      ) : (
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Articles;
