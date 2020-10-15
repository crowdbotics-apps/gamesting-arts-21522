import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth143095Reducer from '../features/EmailAuth143095/redux/reducers';
import Dashboard1143089Reducer from '../features/Dashboard1143089/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth143095: EmailAuth143095Reducer,
Dashboard1143089: Dashboard1143089Reducer,

});