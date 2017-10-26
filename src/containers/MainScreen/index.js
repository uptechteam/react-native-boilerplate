import { connect } from 'react-redux';
import MainScreen from './MainScreen';

import { initApp } from '../../store/main/duck';

const mapStateToProps = ({
  mainStore: {
    appOpenedTimes,
  },
}) => {
  return {
    appOpenedTimes,
  };
};

const mapDispatchToProps = {
  initApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
