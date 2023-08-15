export const getItem = (key: string, defaultValue: null) => {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    alert(error);

    return defaultValue;
  };
};

export const setItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error('Problem saving value to localStorage');
  };
};