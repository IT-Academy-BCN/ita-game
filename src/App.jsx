import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  Historical,
  Login,
  LeaderBoard,
  Profile,
  Register,
  Information,
  Wiki,
  Resource,
} from './pages';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historical" element={<Historical />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/resource" element={<Resource />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
