import React from 'react';
import './Articles.css';
import '../animations/loadingAnimation.css';
import Article from '../Article/Article';
import { useSelector } from 'react-redux';
import {
  getAllReddits,
  getRedditLoading,
  getErrorReddits,
} from '../store/redditSlice';

const Articles = () => {
  const reddits = useSelector(getAllReddits);
  const loading = useSelector(getRedditLoading);
  const errorReddits = useSelector(getErrorReddits);
  return (
    <div id="articles">
      {errorReddits ? <h1>No Reddits available</h1> : null}
      {reddits.length > 1 && !loading ? (
        reddits.map((reddit, index) => {
          return <Article key={index} data={reddit} />;
        })
      ) : (
        <>
          {reddits.length > 1 ? (
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <h1>No reddits found. Try different search term</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Articles;
