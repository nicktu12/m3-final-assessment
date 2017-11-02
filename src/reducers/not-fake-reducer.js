export const houses = (state={}, action) => {
  switch (action.type) {
  case 'HOUSES_API_RES':   
    return action.results;
  default:
    return state;
  }
};
