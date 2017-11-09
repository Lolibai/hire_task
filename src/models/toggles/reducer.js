import { toggles_a as actions } from '../_actions.register'

const initialState = {
  data: [],
  question: "",
  pending: false,
  correct: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOGGLES_LIST_REQUEST:
      return {
        ...state,
        pending: true
      }
    case actions.GET_TOGGLES_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        pending: false
      }
    case actions.GET_TOGGLES_LIST_FAILURE:
      return {
        ...state,
        ...action.payload,
        pending: false
      }
    case actions.TOGGLE_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actions.TOGGLE_FAILURE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

