import './App.css';
import CardSwipe from './components/CardSwipe.tsx';
import Topics from './components/Topics.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       BitLearn
      </header>
      <Topics />
      <CardSwipe />
      <footer className="App-footer">
        <p>© 2023 BitLearn. All rights reserved.</p>
      </footer>        
    </div>
  );
}

export default App;
