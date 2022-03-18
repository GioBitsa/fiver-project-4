import './App.css';
import { Routes, Route } from "react-router-dom";
import { Account, Error, Home } from './pages';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
