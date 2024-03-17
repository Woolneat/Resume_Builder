import React,{ useState} from 'react';
import AnimatedLogo from './Components/AnimatedLogo';
import Header from './Components/header';
import './styles/App.css';

function App() {
  const [logoAnimation,setLogoAnimation] = useState(false);
  return (
    <div className="App">
      {!logoAnimation && <AnimatedLogo />}
      {logoAnimation && <Header />}
      {!logoAnimation &&  setTimeout(() => setLogoAnimation(true), 2000)}
    </div>
  );
}

export default App;