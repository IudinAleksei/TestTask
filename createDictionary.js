const createDictionary = (keys = [], values = []) => {
  if (!Array.isArray(keys) || !Array.isArray(values)) {
    console.error('The type of the both argument must be array');
    return;
  }

  const dictionary = Object.create(null);

  keys.forEach((key, index) => {
    const value = values[index] === undefined ? null : values[index];
    dictionary[key] = value;
  })

  return dictionary;
}
