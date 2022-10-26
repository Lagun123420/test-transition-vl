import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/works" element={<Works/>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
