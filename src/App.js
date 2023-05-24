import logo from './logo.svg';
import './App.css';
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
function App() {

  const { 
    stringHookState, 
    HelloWorld,
    reverseString, 
    dblStr,
    setStringHookState 
  } = useStringHook()

  return (
    <div className="App App-header">
      <h1>Custom Hooks</h1>
      <h4>------StringHook------------</h4>
      <p>{stringHookState}</p>
      <p>{HelloWorld}</p>
      <input onChange={
        (event) => setStringHookState(event.target.value)
      } />
      <button onClick={reverseString}>Reverse IT!</button>
      <button onClick={dblStr}>Double IT!</button>
      
      <Example />
    </div>
  );
}

export default App;
