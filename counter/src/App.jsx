import { useState } from 'react'
import myLogo from './assets/logo.png'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  
  return (
    <section className='block'>

        <a href="https://github.com/Primis1" target='__blank'>
          <img src={ myLogo } className='logo' alt="" href='https://github.com/Primis1'/>
        </a>

        <h1>My Counter</h1>

        <p className='display'>{ count }</p>

        <div className='btn__wrapper'>
          <button className='btn' onClick={ () => setCount( count <= -10 || count>10? count - 10 : count - 1)}> - </button>
          <button className='btn' onClick={ () => setCount( count = 0)}> clear </button>
          <button className='btn' onClick={ () => setCount( count >= 10 || count<-10? count + 10 : count + 1 )}> + </button>
        </div>
        <p>
          My first react project
        </p>

        <p>Click on the logo to get my github</p>

    </section>
    )
}

export default App
