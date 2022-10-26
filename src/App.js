import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/works" element={<Works/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
