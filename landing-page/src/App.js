import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <Router>
      <ChakraProvider>
        <NavBar />
        <Home/>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
