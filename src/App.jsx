import "./App.css";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main
        name="marin"
        age={20}
        job="developer"
        bio="Je travaille chez Moonz en tant qu'alternant"
      />
      <Footer />
    </>
  );
}

export default App;
