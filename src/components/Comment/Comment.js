import React from 'react';
import user from '../../images/user.png';
import './Comment.css';
const Comment = () => {
  return (
    <div className="comment">
      <div className="title">
        <img
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
          alt=""
        />
        <h3>MeinStern</h3>
        <h4>• 13d ago</h4>
      </div>
      <p>
        I like these a lot better than those cupcakes that are piled high with
        more frosting than actual cake. Sometimes sprinkles add that nice
        contract of texture that's often missing from cake. They look visually
        appealing to me.
      </p>
    </div>
  );
};

export default Comment;
