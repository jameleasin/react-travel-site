
import './App.css';
import NavBar from "./components/NavBar"
import Home from './components/pages/home';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route path='/' exact component={Home} />
           
         </Routes>
    </Router>
      
      </>

  );
}

export default App;
