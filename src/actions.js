import axios from 'axios'
import {RECEIVE_REGION_DATA} from './containers/SubregionManagement/reducer'


export function getRegionData (region) {
  return (dispatch, getState) => {
    let state = getState()
    return axios.get('/rest/contractor/regions/' + region).then((values) => {
      dispatch({type: RECEIVE_REGION_DATA, Payload: values.data})
    })
  }
}
