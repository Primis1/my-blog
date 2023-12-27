import { useState } from 'react'
import myLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='block'>

        <a href="https://github.com/Primis1" target='__blank'>
          <img src={ myLogo } className='logo' alt="" href='https://github.com/Primis1'/>
        </a>

        <h1>My Counter</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            First react Project
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

    </section>
  )
}

export default App
