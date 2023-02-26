// export const URL = "http://localhost:8000";
export const URL =
  process.env.NODE_ENV == "production"
    ? ""
    : process.env.REACT_APP_DEV_MODE;
