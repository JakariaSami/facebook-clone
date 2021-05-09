import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import {useStateValue} from './components/StateProvider'

function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className='app'>
      {!user ? (
        <Login/>
      ) : (
        <React.Fragment>
          <Header />
          
          <div className='app_body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default App