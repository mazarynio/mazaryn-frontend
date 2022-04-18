import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

test('renders App component', () => {
  render(
  <Provider store={store}>
      <App />
  </Provider>
  );
});
