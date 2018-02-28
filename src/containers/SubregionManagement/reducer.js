import Immutable from 'immutable'


const initialState = Immutable.fromJS({
    regionData: ''
})

export const RECEIVE_REGION_DATA = 'RECEIVE_REGION_DATA'

export const getSelectedRegionName = (state) => state.mainReducer.get('regionData')


export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_REGION_DATA :
            return state.set('regionData', action.Payload)
        default:
            return state
    }
}
