export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error
});

export const fetchJobs = (data1) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          limit: 10,
          offset: data1
        })
      });
      const data = await response.json();
      dispatch(fetchJobsSuccess(data));
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };
};
