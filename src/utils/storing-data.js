export const storingData = (responseData) => {
  const responseDataKeys = Object.keys(responseData);

  const storingData = {};
  for (let key in responseDataKeys) {
    const name = responseDataKeys[key];
    if (name === "expiresIn") {
      const expirationDate = new Date(
        new Date().getTime() + responseData["expiresIn"] * 1000
      );
      storingData["expirationDate"] = expirationDate;
    } else {
      storingData[name] = responseData[name];
    }
  }
  localStorage.setItem("userData", JSON.stringify(storingData));
};
