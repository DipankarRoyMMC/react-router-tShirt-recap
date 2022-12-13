import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Grandpa from './components/Grandpa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orderreview from './components/Orderreview/Orderreview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/orderreview' element={<Orderreview></Orderreview>}>Order Review</Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}>Grandpa</Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
