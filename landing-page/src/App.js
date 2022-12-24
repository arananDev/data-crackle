import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <Router>
      <ChakraProvider>
        <NavBar/>
      </ChakraProvider>
    </Router>
  );
}

export default App;
