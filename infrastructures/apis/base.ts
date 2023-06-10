import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = '';

const getNickname = () => {
  AsyncStorage.getItem('nickname').then(nickname => nickname ?? '');
};

const baseHeaders = async () => {
  const nickname = await getNickname();
  return {
    Accept: `*/*`,
    'Content-Type': `application/json`,
    'X-AUTH-TOKEN': nickname,
  };
};

interface Request {
  url: string;
  headers?: object;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
}

interface RequestWithParams extends Request {
  params?: object;
}

interface RequestWithData extends Request {
  data?: object;
}

const sendRequest = async ({
  url, headers, method
}: RequestWithParams) => {
  return fetch(BASE_URL + url, {
    method,
    headers: {...baseHeaders, ...headers},
  }).then(response => response.json())
};

const sendRequestForData = async ({ url, method, headers, data }: RequestWithData) => {
  return fetch(BASE_URL + url, {
    method,
    headers: {...baseHeaders, ...headers},
    body: JSON.stringify(data),
  }).then(response => response.json())
};

export const fetchAPI = {
  get: ({url, params, headers}: Omit<RequestWithParams, 'method'>) => {
    sendRequest({url, params, method: 'get', headers})
  },
  post: ({url, data, headers}: Omit<RequestWithData, 'method'>) => {
    sendRequestForData({url, data, method: 'post', headers})
  },
  put: ({url, data, headers}: Omit<RequestWithData, 'method'>) => {
    sendRequestForData({url, data, method: 'put', headers})
  },
  patch: ({url, data, headers}: Omit<RequestWithData, 'method'>) => {
    sendRequestForData({url, data, method: 'patch', headers})
  },
  delete: ({url, params, headers}: Omit<RequestWithParams, 'method'>) => {
    sendRequest({url, params, method: 'delete', headers})
  },
}
