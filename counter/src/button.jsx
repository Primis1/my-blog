import { useState } from 'react';
import './button.css'
import './index.css'
import App from './App.jsx';

function Btn() {
    const [open, setOpen] = useState(false);

    return (
        <body>
            {!open && <button onClick={ () => setOpen(true)}>Begin count</button>}
            {open && <App />}
        </body>

    )
}

export default Btn;


