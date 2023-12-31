import React, { useState } from 'react';

import './Menu.css';

import { useHistory } from 'react-router-dom';




function App() {

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
 

  const toggleMenu = () => {

    setIsOpen(!isOpen);

  };

 

  return (

    <div className='outermenu'>

      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></button>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>

        <ul className="menu">

          <li data-text="Pizza Home"  onClick={() => history.push("/")} >Home</li>

          <li data-text="Cust"   onClick={() => history.push("/user")} >Customer</li>

          <li data-text="Admin" onClick={() => history.push("/admin")}  >Moderator</li>

          

        </ul>

      </nav>

      {/* <article className={`article ${isOpen ? 'open' : ''}`}>

        <h1>This is an Article About Something</h1>

        <h3>by Lauren Ipsum</h3>

        <p><span>Toggle the menu by clicking on the infamous hamburger icon in the top left corner! It could be the most fun you will ever have.</span></p>

      </article> */}

    </div>

  );

}

 

export default App;