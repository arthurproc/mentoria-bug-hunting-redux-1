import { LOADING, SET_SNAPSHOP } from '../actions/types';

const INITIAL_STATE = {
  url: '',
  archived_snapshots: {
    closest: {
      status: 200,
      available: false,
      url: '',
      timestamp: '',
    },
  },
  timestamp: '',
  loading: false,
};

const timeMachineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_SNAPSHOP: {
    return {
      ...state,
      archived_snapshots: action.payload.archived_snapshots,
      loading: false,
    };
  }
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
};

export default timeMachineReducer;
