import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {  
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
