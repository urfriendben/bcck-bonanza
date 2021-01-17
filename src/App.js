import './styles/fonts.scss';
import './styles/main.scss';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from '@/store';

import AppBar from '@/components/AppBar/AppBar';
import Footer from '@/components/Footer/Footer';
import Home from '@/components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <AppBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
