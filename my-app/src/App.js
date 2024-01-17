
import './App.css';
import Login from './Login';
import { useState } from 'react';
import Home from './Home';
import Sign from './Sign';


function App() {
  let[isLogged,setIsLogged] = useState('login');
  const[formData,setFormData]=useState([])
  return (
    <div>
       <div>
   {isLogged==='login'&& <Login isLogged={isLogged} setIsLogged={setIsLogged} />}
   </div>
   <div>
    {isLogged==='home'&& <Home  formData={formData} setFormData={setFormData} setIsLogged={setIsLogged}/>}
   </div>
   <div>
        {isLogged === 'sign' && <Sign formData={formData} setFormData={setFormData} setIsLogged={setIsLogged}></Sign>}
      </div>
    </div>
  );
}

export default App;
