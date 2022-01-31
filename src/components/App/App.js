import './App.css';
import SubReddit from '../SubReddit/SubReddit';
import ArticlePage from '../ArticlePage/ArticlePage';
import Articles from '../Articles/Articles';
import Header from '../Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncReddits,
  fetchAsyncSubReddits,
} from '../../features/Reddits/redditSlice';
import { useEffect } from 'react';

function App() {
  const redditText = 'popular';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncReddits(redditText));
    dispatch(fetchAsyncSubReddits());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path=":ArticleTitle" element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
        <SubReddit />
      </main>
    </div>
  );
}

export default App;
