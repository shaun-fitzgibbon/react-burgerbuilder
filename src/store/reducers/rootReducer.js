import { combineReducers } from 'redux';

import burgerBuilderReducer from './burgerReducer';
import orderReducer from './orderReducer';

export const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
});

export default rootReducer;
