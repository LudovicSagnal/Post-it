import UserPage from './pages/UserPage';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <main className="App">
        <Nav/>
        <Home/>
        <UserPage/>
      </main>
    </>
  )
}

export default App