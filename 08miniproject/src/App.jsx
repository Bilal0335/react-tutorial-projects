import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
const App = () => {
  return (
    <UserContextProvider>
      <h1 className="text-red-600 text-7xl underline text-center p-7 font-bold">React with Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App