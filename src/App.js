
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';

function App() {

  return ( //state가 변경되면 HTML이 자동으로 재렌더링 된다
    <div className="App">
      <Navbar/>
      <List/>
    </div>
  );
}

export default App;
