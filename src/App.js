import Books from "./pages/Books";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import AppRouter from "./context/AppRouter";

function App() {
  return (
    <>
      <Header />

      <AppRouter>
        <Books />
      </AppRouter>
      <Footer />
    </>
  );
}

export default App;
