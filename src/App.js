import Footer from "./pages/Footer";
import Header from "./pages/Header";
import AppRouter from "./context/AppRouter";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="font-mono w-4/5 m-auto bg-slate-100">
        <Header />

          <AppRouter>
              <Home/>
          </AppRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
