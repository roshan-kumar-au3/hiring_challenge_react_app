import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class Home extends React.Component {

  doRedirect = () => {
      return <Redirect to="/app" />
  }

    render() {
        // let login = false;

        return (
          <BrowserRouter>
            <Route path="/app" component={App} />
            {this.doRedirect()}
          </BrowserRouter>
          // <div>
          //     {
          //         login ? <App /> : <Login />
          //     }
          //     {/* <App />
          //     <Login /> */}
          // </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));
