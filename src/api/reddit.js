export const API_ROOT = 'https://www.reddit.com';

export const getPopularPosts = async (reddit) => {
  const searchterm = `/r/${reddit}`;
  const response = await fetch(`${API_ROOT}${searchterm}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getSearchReddits = async (searchterm) => {
  const response = await fetch(`${API_ROOT}/search.json?q=${searchterm}`);
  const json = await response.json();

  return json.data.children.map((reddit) => reddit.data);
};

export const getSubredditPosts = async (subredditTitle) => {
  const response = await fetch(`${API_ROOT}/r/${subredditTitle}.json`);
  const json = await response.json();
  const data = json.data.children.map((reddit) => reddit.data);
  data.shift();

  return data;
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();
  return json[1].data.children.map((subreddit) => subreddit.data);
};

///r/nextfuckinglevel/comments/sgv8ju/of_course_this_dude_is_not_human/
