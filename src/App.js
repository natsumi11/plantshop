import './App.css';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import { Cartprovider } from './Provider/Cartprovider';

function App() {
   return (
    <Cartprovider>
      <div className='all'>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
      </div>
    </Cartprovider>
  )
}

export default App;
