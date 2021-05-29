import { useState } from "react";

import axios from "axios";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initializeError = () => {
    setError(null);
  };

  const sendRequest = async (url, sendingData) => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, sendingData);
      const responseData = await response.data;

      setIsLoading(false);

      return responseData;
    } catch (error) {
      const errorResponse = error.response.data;
      setIsLoading(false);
      setError(errorResponse.error.message);
    }
  };

  return { isLoading, error, initializeError, sendRequest };
};
