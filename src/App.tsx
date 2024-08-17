import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLikes } from './hooks/useLikes';
import Header from './components/Header';
import CardList from './components/CardList';
import Evaluation from './components/Evaluation';
import Footer from './components/Footer';

function App(): JSX.Element {
  const { handleLikedReason, likes, totalLikes } = useLikes();

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CardList likes={likes} onLikedReason={handleLikedReason} />}
        />
        <Route
          path="/evaluation"
          element={<Evaluation totalLikes={totalLikes} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
