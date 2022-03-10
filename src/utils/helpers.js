export const deepCopy = (data) => {
  let copyEle;
  if (null === data || 'object' !== typeof data) {
    return data;
  }

  if (Array.isArray(data)) {
    copyEle = [];
    copyEle = data.map(ele => deepCopy(ele));
    return copyEle;
  } else if (data instanceof Object) {
    copyEle = {};
    for (const attr in data) {
      if (data.hasOwnProperty(attr)) {
        copyEle[attr] = deepCopy(data[attr]);
      }
    }
    return copyEle;
  }
}