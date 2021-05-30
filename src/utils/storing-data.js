export const storingData = (responseData) => {
  const responseDataKeys = Object.keys(responseData);

  for (let key in responseDataKeys) {
    const name = responseDataKeys[key];
    localStorage.setItem(name, responseData[name]);
  }
};
