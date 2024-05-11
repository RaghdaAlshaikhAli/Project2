import { useEffect, useState } from 'react';
import Footer from './components/footer';
import './index.css';
import Home from './pages/Home';
import SplashScreen from './pages/spalshScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2500);
  }, []);

  return (
    <>
      <div className=''>
        {showSplash ? <SplashScreen /> : <Home />}
      </div>
    </>
  );
}

export default App;
