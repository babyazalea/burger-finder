import { useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initializeError = () => {
    setError(null);
  };

  const sendRequest = (url, sendingData) => {};
};
