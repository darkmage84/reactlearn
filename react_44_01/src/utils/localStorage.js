export const getLocalStorage = (key) => {
  try {
    if (localStorage.getItem(key)) {
      const message = JSON.parse(localStorage.getItem(key));
      return message;
    }
  } catch (error) {
    console.log(error.message);
  }

  return [];
};

/*
nếu localStorage.getItem(key) không phải JSON 
=> message sẽ bị lỗi
*/

export const setLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};
