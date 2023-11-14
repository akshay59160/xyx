

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './component/Header';
import "./styles/app.scss";
import Home from './component/Home';
// import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <Header/>
    

   
      <Routes>
    
      
      <Route path='/' element={<Home/>}/>
      
        
       

      </Routes>

       
    </Router>
  );
}

export default App;

