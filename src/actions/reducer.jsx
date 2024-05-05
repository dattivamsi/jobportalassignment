import { FETCH_JOBS_FAILURE, FETCH_JOBS_SUCCESS } from "./jobs";



const initialState = {
  jobs: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        error: null
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
