import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comic from './components/Comic';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Comic />}/>
          <Route exact path="/:number" element={<Comic />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
