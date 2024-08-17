const SERVER = import.meta.env.DEV ? 'http://192.168.60.177:8000' : '';

export const ENV = {
  apiUrl: `${SERVER}`,
  basePath: SERVER,
};
