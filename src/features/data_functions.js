import redditlogo from '../images/reddit-logo-16.png';

export const validateNum = (number) => {
  if (number > 999999) {
    const likes = number.toString();
    const sliceNum = likes.length - 6;
    const M_number = likes.slice(0, sliceNum) + 'M';
    return M_number;
  } else if (number > 999) {
    const likes = number.toString();
    const sliceNum = likes.length - 3;
    const k_number = likes.slice(0, sliceNum) + 'K';
    return k_number;
  }
  return number;
};

export const getTime = (time) => {
  let unix_timestamp = time;
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();

  if (hours > 24) {
    const days = hours / 24;
    if (days < 2) {
      return days + ' day ago';
    }
    return days + ' days ago';
  } else {
    if (hours < 2) {
      return hours + ' hour ago';
    }
    return hours + ' hours ago';
  }
};

// get ico for reddit
export const getIco = (data, subreddits) => {
  const name = data.subreddit;
  const subredditNameArray = [];
  subreddits.map((subreddit) => {
    return subredditNameArray.push(subreddit.display_name);
  });
  const indexIco = subredditNameArray.findIndex(
    (subreddit) => subreddit === name
  );
  if (indexIco > -1) {
    if (subreddits[indexIco].icon_img) {
      return subreddits[indexIco].icon_img;
    } else {
      return redditlogo;
    }
  } else {
    return redditlogo;
  }
};
