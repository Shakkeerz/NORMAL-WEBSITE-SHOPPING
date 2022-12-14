import {
  Footer,
  Header,
  Home
} from './components/paths'

import AppRouter from "./context/AppRouter";


function App() {
  return (
    <>
      <div className="font-mono p-5 md:p-0 md:w-4/5 m-auto bg-slate-100">
        <div className='mb-5'> <Header /></div>
        <AppRouter>
          <Home />
        </AppRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
