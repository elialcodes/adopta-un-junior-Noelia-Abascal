import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <CardList />
      <Footer />
    </>
  );
}

export default App;
