import ReactDOM from 'react-dom';
import React from 'react';
import {
    AppContainer,
  } from 'react-hot-loader';

import Component from './components/App';

ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
document.getElementById('root'),
);
  });
}
