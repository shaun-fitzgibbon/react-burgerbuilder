import { combineReducers } from 'redux';

import burgerBuilderReducer from './burgerReducer';
import orderReducer from './orderReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

export default rootReducer;
