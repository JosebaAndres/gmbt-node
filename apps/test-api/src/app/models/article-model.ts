import { isString, isStringOrUndefined } from '../utils/string-utils';

export interface ArticleModel {
  id?: string;
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArticleModel(value: any): value is ArticleModel {
  if (value && isStringOrUndefined(value.id) && isString(value.name)) {
    return true;
  } else {
    return false;
  }
}
