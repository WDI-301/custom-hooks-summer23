import logo from './logo.svg';
import './App.css';
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import useInput from './hooks/useInput';
function App() {

  const { 
    stringHookState, 
    HelloWorld,
    reverseString, 
    dblStr,
    setStringHookState 
  } = useStringHook()

//  const inputField = useInput()
  const firstname = useInput('fname','First Name')
  const lastname = useInput('lname','Last Name')
  const email = useInput('email','Email')

  return (
    <div className="App App-header">
      <h1>Custom Hooks</h1>
{/* 
      <h4>------StringHook------------</h4>
      <p>{stringHookState}</p>
      <p>{HelloWorld}</p>
      <input onChange={
        (event) => setStringHookState(event.target.value)
      } />
      <button onClick={reverseString}>Reverse IT!</button>
      <button onClick={dblStr}>Double IT!</button> */}
      <Example />
      <h4>------useInput------------</h4>
      {/* <input {...inputField} /> */}
      <h3>First Name: {firstname.value}</h3> 
      <input  {...firstname} />
      <h3>Last Name: {lastname.value}</h3>
      <input {...lastname} />
      <h3>Email: {email.value}</h3>
      <input {...email} />
      
    </div>
  );
}

export default App;
