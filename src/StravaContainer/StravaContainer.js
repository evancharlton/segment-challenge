import { createContext, useContext, useState } from 'react';
import OAuth2Login from 'react-simple-oauth2-login';

const { REACT_APP_STRAVA_CLIENT_ID, REACT_APP_STRAVA_CLIENT_SECRET } =
  process.env;

const StravaTokenContext = createContext({
  token: '',
});

export const useStrava = () => {
  const { token } = useContext(StravaTokenContext);
  return token;
};

const StravaContainer = ({ children }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const errors = [];
  if (!REACT_APP_STRAVA_CLIENT_ID) {
    errors.push('Missing REACT_APP_STRAVA_CLIENT_ID');
  }
  if (!REACT_APP_STRAVA_CLIENT_SECRET) {
    errors.push('Missing REACT_APP_STRAVA_CLIENT_SECRET');
  }

  if (errors.length) {
    return (
      <div>
        <h1>Missing OAuth configuration</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return <pre>{error}</pre>;
  }

  if (!token) {
    return (
      <OAuth2Login
        authorizationUrl="https://www.strava.com/oauth/authorize"
        responseType="code"
        clientId={REACT_APP_STRAVA_CLIENT_ID}
        redirectUri={window.location}
        onSuccess={({ code }) => setToken(code)}
        onError={(e) => setError(e)}
        scope="read"
      />
    );
  }


  return (
    <StravaTokenContext.Provider value={{ token }}>
      {children}
    </StravaTokenContext.Provider>
  );
};

export default StravaContainer;
