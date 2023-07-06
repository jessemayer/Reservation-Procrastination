
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import FireLookout from './Pages/FireLookout';
import CampSites from './Pages/CampSites';
import Permits from './Pages/Permits';
import Tours from './Pages/Tours';
import Lotteries from './Pages/Lotteries';
import NavBar from './Components/NavBar'


function App() {
  return (
    <>
    <NavBar />
   <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/fireLookout" element={<FireLookout />} />
    <Route path="/campSites" element={<CampSites />} />
    <Route path="/permits" element={<Permits />} />
    <Route path="/Tours" element={<Tours />} />
    <Route path='/lotteries' element={<Lotteries />} />
   </Routes >

   
   </>
  );
}

export default App;
