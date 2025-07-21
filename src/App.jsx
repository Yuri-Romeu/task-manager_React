import { useState } from 'react';

function App() {
     const [message, setMessage] = useState('Hello world');
     return (
          <>
               <h1>{message}</h1>
               <button onClick={() => setMessage('Bye world')}>Mudar mensagem</button>
          </>
     );
}

export default App;
