import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopTabs from './tab/TopTabs';
import Join from './join/Join';
import Login from './login/Login';
import Board from './board/Board';

function App() {
  // Routes 안에 Link 설정
  return (
    <div>
      <BrowserRouter>
      <TopTabs />
        <Routes>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
