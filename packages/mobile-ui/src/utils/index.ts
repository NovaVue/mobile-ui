export function isEmpty(value: any): boolean {
  const emptyValue = [0, '0', '', undefined, null, 'NaN', 'null', 'undefined'];
  return emptyValue.includes(value);
}

export function computedObject() {}

export function isObject(data: any): data is object {
  return Object.prototype.toString.call(data) === '[object Object]';
}

export function isBoolean(value: any): value is boolean {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}
