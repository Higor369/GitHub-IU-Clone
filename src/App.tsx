import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Profile from './pages/Profile' 
import Repo from './pages/Repo/index' 
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Profile />}/>
        <Route path='/:usernamen' element={<Profile />}/>
        <Route path='/:username/:reponame' element={<Repo />}/>
      </Routes>
    {/* <Footer /> */}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
