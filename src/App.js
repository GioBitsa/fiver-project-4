import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import { Account, Analytics, Contacts, Error, Home, Inbox, Workflow } from './pages';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/workflows" element={<Workflow />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
