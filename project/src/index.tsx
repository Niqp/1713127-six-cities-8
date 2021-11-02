import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_TO_RENDER: 8,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsToRender = {Setting.CARDS_TO_RENDER}
    />
  </React.StrictMode>,
  document.getElementById('root'));
