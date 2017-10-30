import { Provider } from 'react-redux';
import { registerScreens } from './src/App';
import configureStore from './src/store/configureStore';

const store = configureStore();

registerScreens(store, Provider);
