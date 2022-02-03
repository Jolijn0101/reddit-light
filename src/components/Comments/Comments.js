import React from 'react';
import './Comments.css';
import '../../animations/loadingAnimation.css';
import {
  getComments,
  getCommentsLoading,
} from '../../features/Reddits/commentSlice';
import { useSelector } from 'react-redux';
import { getTime } from '../../features/data_functions';

const Comment = () => {
  const data = useSelector(getComments);
  const loading = useSelector(getCommentsLoading);
  return (
    <div className="comments">
      {data && loading === false ? (
        data.map((comment, index) => {
          if (
            comment.author &&
            comment.author !== 'AutoModerator' &&
            comment.author !== 'unexBot' &&
            comment.author !== '[deleted]' &&
            comment.author !== 'LSFmoderator'
          ) {
            const number = Math.floor(Math.random() * 8);
            const avatar = `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${number}.png`;
            const Time = getTime(comment.created);
            return (
              <div className="comment" key={index}>
                <div className="headercomment">
                  <img src={avatar} alt="avatar" />
                  <div className="name">
                    <h3>{comment.author}</h3>
                    <h4>• {Time}</h4>
                  </div>
                </div>
                <p>{comment.body}</p>
              </div>
            );
          } else {
            return null;
          }
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

export default Comment;
