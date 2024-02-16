import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Careers from './components/Careers';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Header />
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/fullStack' element={<FullStack />} />
        <Route path='/datascience' element={<DataScience />} />
        <Route path='/cybersecurity' element={<CyberSecurity />} />
        <Route path='/careers' element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
