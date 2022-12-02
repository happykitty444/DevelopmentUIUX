import './App.css';

import background from "./assets/images/DevelopmentBackground.png";
import MainItems from './MainItems';

function App() {
  return(
    <div
    style={{
      backgroundImage:`url(${background})`,
      backgroundSize:"100% 100%",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width:"100vw", 
      height:"320vh"}}
    > 
      <MainItems/>
    </div>
  );
}

export default App;
