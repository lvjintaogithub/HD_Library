import wepy from 'wepy';

const request = (url, data, methods) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: url,
      data: data,
      method: methods,
      success: (res) => {
        resolve(res.data);
      },
      fail: (error) => {
        reject(error);
      }
    });
  });
};

export const requestGet = (url, data) => {
  return request(url, data, 'GET');
};
export const requestPost = (url, data) => {
  return request(url, data, 'POST');
};
