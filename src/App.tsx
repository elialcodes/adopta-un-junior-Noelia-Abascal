import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import Valoration from './components/Valoration';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/valoration" element={<Valoration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
