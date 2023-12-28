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
        <button onClick={ ()=> setCount( count + 1)} >count { count }</button>
        <p>
          My first react project
        </p>

        <p>Click on the logo to get my github</p>

    </section>
  )
}

export default App
