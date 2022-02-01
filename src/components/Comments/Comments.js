import React from 'react';
import './Comments.css';
import { getComments } from '../../features/Reddits/commentSlice';
import { useSelector } from 'react-redux';
import { getTime } from '../../features/data_functions';

const Comment = () => {
  const data = useSelector(getComments);

  return (
    <div className="comments">
      {data ? (
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
        <div className="reddits-error">
          <h3>{data.Error}</h3>
        </div>
      )}
    </div>
  );
};

export default Comment;
