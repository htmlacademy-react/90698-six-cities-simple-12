import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/authorization';

export const getUser = (state: State): Omit<UserInfo, 'token'> | undefined =>
  state[NameSpace.Authorization].userInfo;
export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.Authorization].authorizationStatus;
