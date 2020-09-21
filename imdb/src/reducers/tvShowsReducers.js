const initialState = {
  tvShowsList: []
};

const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TVSHOWS": {
      return {
        ...state,
        tvShowsList: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default tvShowsReducer;
