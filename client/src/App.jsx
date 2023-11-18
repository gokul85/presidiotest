import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/Index/Index';
import Signup from './Pages/Signup';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
