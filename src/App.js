import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fibonacci from './pages/Fibonacci';
import Strings from './pages/Strings';
import PrimeNumbers from './pages/PrimeNumbers';
import Test from './pages/Test';
import Triangle from './pages/Triangle';
import MultiplicationTable from './pages/MultiplicationTable';
import SumOfNatural from './pages/SumOfNatural';
import SumOfAllDigits from './pages/SumOfAllDigits';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fibonacci' element={<Fibonacci />} />
        <Route path='/strings' element={<Strings />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/test' element={<Test />} />
        <Route path='/triangle' element={<Triangle />} />
        <Route path='/multiplication-table' element={<MultiplicationTable />} />
        <Route path='/sum-of-natural' element={<SumOfNatural />} />
        <Route path='/sum-of-all-digits' element={<SumOfAllDigits />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;