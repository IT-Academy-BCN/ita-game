import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Avatar, EditAvatar, PageEdition } from './components/avatar';
import { Home, Historical, Login, LeaderBoard, Profile, Register, Information, Wiki } from './pages';

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
               <Route path="/testing-useravatar" element={<Avatar />} />
               <Route path="/testing-edit-avatar" element={<EditAvatar />} />
               <Route path="/testing-page-edition" element={<PageEdition />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}
