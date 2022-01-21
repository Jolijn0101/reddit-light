import './App.css';
import SubReddit from './SubReddit';
import ArticlePage from './ArticlePage';
import Articles from './Articles';
import Header from './Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="articlepage" element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
        <SubReddit />
      </main>
    </div>
  );
}

export default App;
