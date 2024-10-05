import './App.css';
import {Theme} from './components/Theme';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Theme>
      <div className="App">
        <h1>React Theme Switcher</h1>
        <p>Press the below button for a demo for theme switching using React Context.</p>
        <ThemeToggle />
      </div>
    </Theme>
  );
}

export default App;
