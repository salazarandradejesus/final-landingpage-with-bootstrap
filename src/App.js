import React from 'react';
import Cards from './components/Cards';
import NavContent from './components/NavbarContent';
import JumbotronContent from './components/JumbotronContent'

function App() {
  return (
    <div>
      <NavContent/>
      <JumbotronContent/>
      <Cards/>
    </div>
  )
}

export default App
