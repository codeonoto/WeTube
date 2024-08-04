import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
import { ThemeProvider } from './components/ThemeProvider';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscription';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/shorts'
            element={<Shorts />}
          />
          <Route
            path='/subscriptions'
            element={<Subscriptions />}
          />
          <Route
            path='/search'
            element={<Search />}
          />
          <Route
            path='/zzz'
            element={<PageNotFound />}
          />
          <Route
            path='/watch/:id'
            element={<Watch />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
