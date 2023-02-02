// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isString(value: any): value is string {
  if (value && typeof value === 'string') {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isStringOrUndefined(value: any): value is string | undefined {
  if (value === undefined || isString(value)) {
    return true;
  } else {
    return false;
  }
}
