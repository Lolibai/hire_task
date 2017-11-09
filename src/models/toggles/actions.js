export const GET_TOGGLES_LIST_REQUEST = 'GET_TOGGLES_LIST_REQUEST';
export const GET_TOGGLES_LIST_SUCCESS = 'GET_TOGGLES_LIST_SUCCESS';
export const GET_TOGGLES_LIST_FAILURE = 'GET_TOGGLES_LIST_FAILURE';
export const TOGGLE_REQUEST = 'TOGGLE_REQUEST';
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS';
export const TOGGLE_FAILURE = 'TOGGLE_FAILURE';


export function getTogglesListRequest () {
    return {
      type: GET_TOGGLES_LIST_REQUEST,
    }
  }
  
  export function getTogglesListSuccess (data) {
    return {
      type: GET_TOGGLES_LIST_SUCCESS,
      payload: data
    }
  }
  
  export function getTogglesListFailure (data) {
    return {
      type: GET_TOGGLES_LIST_FAILURE,
      payload: data
    }
  }

  export function toggleRequest (data) {
    return {
      type: TOGGLE_REQUEST,
      payload: data
    }
  }
  
  export function toggleSuccess (data) {
    return {
      type: TOGGLE_SUCCESS,
      payload: data
    }
  }
  
  export function toggleFailure (data) {
    return {
      type: TOGGLE_FAILURE,
      payload: data
    }
  }