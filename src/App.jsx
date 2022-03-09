import React, { Suspense } from "react";
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import { Header, Footer } from './components';
import { Loading } from './shared';

import configureStore from './store/store';

const UsersList = React.lazy(() => import('./components/userList/userList'));

const appStore = configureStore();
const App = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/users" element={<UsersList />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
