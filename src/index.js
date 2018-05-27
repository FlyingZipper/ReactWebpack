
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import './style/layout.css';
import './style/style.scss';
import '../node_modules/semantic-ui-css/semantic.css'

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );

render(App);

if (module.hot) module.hot.accept('./components/App', () => render(App));
