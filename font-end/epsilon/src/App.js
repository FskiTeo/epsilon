import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Module from './pages/Module';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/*'
            element={
              <>
                <Header />
                <Routes>
                  <Route path='/Login' element={<Login />} />
                  <Route path='/Module' element={<Module />} />
                </Routes>
              </>
 
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
