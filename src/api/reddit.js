export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const searchterm = `/r/${subreddit}`;
  const response = await fetch(`${API_ROOT}${searchterm}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};
