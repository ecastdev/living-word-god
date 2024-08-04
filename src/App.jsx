
import './App.css';
import Navbar1 from './components/navbarr';
import { Outlet } from 'react-router-dom';
import Footer1 from './components/footer';


function App() {
  return (
    <div className="flex overflow-hidden flex-col items-center">
      
      <Navbar1/>
      <div>
        <Outlet/>
      </div>
        <Footer1/>
    </div>
  );
}
export default App;
