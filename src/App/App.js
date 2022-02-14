import './App.css';
import SubReddit from '../SubReddit/SubReddit';
import ArticlePage from '../ArticlePage/ArticlePage';
import Articles from '../Articles/Articles';
import Header from '../Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncReddits } from '../store/redditSlice';
import { fetchAsyncSubReddits } from '../store/subredditSlice';
import { useEffect } from 'react';

function App() {
  const redditText = 'popular';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncReddits(redditText));
    dispatch(fetchAsyncSubReddits());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/reddit-light/" element={<Articles />} />
          <Route path=":ArticleTitle" element={<ArticlePage />} />
        </Routes>
        <SubReddit />
      </main>
    </Router>
  );
}

export default App;
