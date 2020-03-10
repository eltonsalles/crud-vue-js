const cloneObject = (object) => {
  const clone = (object instanceof Array) ? [] : {};
  for (const i in object) {
    const item = object[i];
    clone[i] = item !== null && typeof item === 'object' ? cloneObject(item) : item;
  }

  return clone;
};

export default cloneObject;
