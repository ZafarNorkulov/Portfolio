import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainContext } from './constants/context';
import { useContext } from 'react';
import Home from './pages/home';
import Resume from './pages/resume';

const App = () => {
  const {resumeStatus,setResumeStatus} = useContext(MainContext);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
