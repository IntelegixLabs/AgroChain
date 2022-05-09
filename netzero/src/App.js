import { Routes, Route, Link } from "react-router-dom";
import Header  from "./Header";
import Farmersmain from "./farmer"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmerlanding" element={<Farmersmain prhat_balance = '600' curr_user_name =' Gajanan' user={{balance: 5000, address: 'anancdl'}} />} />
      </Routes>

    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/farmerlanding">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App;
