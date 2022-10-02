import './App.css';
import Snowboarder from './components/Snowboarder';

function App() {
  return (
    <div className="App">
      <Snowboarder firstName = {'Ben'} lastName = {'Fergeson'} age = {30} haircolor = {'brown'} initialYears={17}/>
      <Snowboarder firstName = {'Hana'} lastName = {'Beaman'} age = {90} haircolor = {'white'} initialYears={20}/>
      <Snowboarder firstName = {'Elena'} lastName = {'Hight'} age = {63} haircolor = {'gray'} initialYears={20}/>
      <Snowboarder firstName = {'Travis'} lastName = {'Rice'} age = {50} haircolor = {'brown'} initialYears={35}/>
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    </div>
  );
}

export default App;
