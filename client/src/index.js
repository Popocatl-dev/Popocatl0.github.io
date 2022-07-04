import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ThemeProvider } from './hooks/themeHook/themeContext';
import { LocalProvider } from './hooks/localHook/localContext';

const Root = () => {
  return (
    <ThemeProvider>
      <LocalProvider>
      <App />
      </LocalProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
serviceWorkerRegistration.register();
