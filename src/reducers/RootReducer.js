import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ProjectReducer from './ProjectReducer';
import UIReducer from './UIReducer';

const RootReducer = combineReducers({
  projects: ProjectReducer,
  ui: UIReducer,
  router: routerReducer,
});

export default RootReducer;
