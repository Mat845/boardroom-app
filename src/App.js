import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import PageNotFound from './components/PageNotFound';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
   <div><Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path='/LoginPage' element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
   </div>
  </BrowserRouter>
  );
}

export default App;
