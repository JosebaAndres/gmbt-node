import { isString, isStringOrUndefined } from '../utils/string-utils';

export interface UserModel {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isUserModel(value: any): value is UserModel {
  if (
    value &&
    isStringOrUndefined(value.id) &&
    isString(value.email) &&
    isStringOrUndefined(value.firstName) &&
    isStringOrUndefined(value.lastName)
  ) {
    return true;
  } else {
    return false;
  }
}
