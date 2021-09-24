import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyles } from "./GlobalStyles.style";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
     <Home />
    </Router>
  );
}

export default App;
