import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ProblemSt from './components/ProblemSt';

function App() {
  return (
    <div className="p-2 bg-lights">
      <Header></Header>
      <ProblemSt></ProblemSt>
      <Main></Main>
    </div>
  );
}

export default App;
