import { useState, useEffect } from 'react';

const Http = (httpClient) => {
  const [error, setError] = useState(null);

  const reqInterceptor = httpClient.interceptors.request.use((request) => {
    setError(null);
    return request;
  });

  const resInterceptor = httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
    };
  }, [httpClient, reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };
  return [error, errorConfirmedHandler];
};

export default Http;
