import logo from './logo.svg';
import './App.css';
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'
function App() {

  const { 
    stringHookState, 
    HelloWorld,
    reverseString 
  } = useStringHook()

  return (
    <div className="App App-header">
      <h1>Custom Hooks</h1>
      <h4>------StringHook------------</h4>
      <p>{stringHookState}</p>
      <p>{HelloWorld}</p>
      <button onClick={reverseString}>Reverse IT!</button>
      <Example />
    </div>
  );
}

export default App;
