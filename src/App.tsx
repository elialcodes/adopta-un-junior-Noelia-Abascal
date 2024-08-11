import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import Evaluation from './components/Evaluation';
import Footer from './components/Footer';
import { useLikes } from './hooks/useLikes';

function App(): JSX.Element {
  const { handleLikedReason, likes, totalLikes } = useLikes();

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CardList
              likes={likes}
              onLikedReason={handleLikedReason}
              totalLikes={totalLikes}
            />
          }
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
