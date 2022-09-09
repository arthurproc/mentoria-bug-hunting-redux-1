import getClosestSnapshot from '../../services/timeMachine';
import { SET_SNAPSHOP, LOADING } from './types';

export const setUrlCreator = (payload) => {
  console.log('aciton creator');
  return {
    type: SET_SNAPSHOP,
    payload,
  };
};

export const setLoading = () => ({
  type: LOADING,
});

export const onUrlSearch = (payload) => async (dispatch) => {
  dispatch(setLoading());
  const { year, month, day, hour, url } = payload;
  const timestamp = `${year}${month}${day}${hour}0000`;
  console.log('chegou aqui');
  const timeMachineResult = await getClosestSnapshot(timestamp, url);
  console.log(timeMachineResult);
  dispatch(setUrlCreator(timeMachineResult));
};
