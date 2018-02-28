import Immutable from 'immutable'
import mainReducer from './containers/SubregionManagement/reducer'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  mainReducer
})