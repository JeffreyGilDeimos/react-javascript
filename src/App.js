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
import CheckWithin100To500 from './pages/CheckWithin100To500';
import RightTriangle from './pages/RightTriangle';
import NumberRightTriangle from './pages/NumberRightTriangle';
import LargestNumber from './pages/LargestNumber';
import Vowels from './pages/Vowels';
import NumberIsosceles from './pages/NumberIsosceles';
import RandomName from './pages/RandomName';





 
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
        <Route path='/multiplication-table' element={<MultiplicationTable />} />
        <Route path='/sum-of-natural' element={<SumOfNatural />} />
        <Route path='/sum-of-all-digits' element={<SumOfAllDigits />} />
        <Route path='/check-within-100-500' element={<CheckWithin100To500 />} />
        <Route path='/right-triangle' element={<RightTriangle />} />
        <Route path='/triangle' element={<Triangle />} />
        <Route path='/number-right-triangle' element={<NumberRightTriangle />} />
        <Route path='/largest-number' element={<LargestNumber />} />
        <Route path='/vowels' element={<Vowels />} />
        <Route path='/number-isosceles' element={<NumberIsosceles />} />
        <Route path='/random-name' element={<RandomName />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;