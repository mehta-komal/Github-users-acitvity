
import githubLogo from './assets/github-logo.png'

import './App.css'
import Search from './components/Search'
import DisplayList from './components/DisplayList'

function App() {


  return (
    <>
    <div className='app'>
      <img className='logo-img' src={githubLogo} />
      <h1>Git Stare</h1>
    </div>
    <Search />

    </>
  )
}

export default App
