import getClosestSnapshot from '../../services/timeMachine';
import { SET_SNAPSHOP, LOADING } from './types';

export const setUrlCreator = (payload) => ({
  type: SET_SNAPSHOP,
  payload,
});

export const setLoading = () => ({
  type: LOADING,
});

export const onUrlSearch = (payload) => async () => {
  setLoading();
  const { year, month, day, hour, url } = payload;
  const timestamp = `${year}${month}${day}${hour}0000`;
  const timeMachineResult = await getClosestSnapshot(timestamp, url);
  setUrlCreator(timeMachineResult);
};
