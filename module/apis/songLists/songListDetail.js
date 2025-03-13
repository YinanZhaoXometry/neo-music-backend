const y_common = require('../y_common');

module.exports = ({ method = 'get', params = {}, option = {} }) => {
  const data = Object.assign(params, {
    format: 'json',
    outCharset: 'utf-8',
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 1928093487,
    inCharset: 'utf-8',
    notice: 0,
  });

  // 以下是项目自带的新的请求参数，由于兼容问题，先用原有的参数后续在更新
  // {
  //   format: 'json',
  //   outCharset: 'utf-8',
  //   type: 1,
  //   json: 1,
  //   utf8: 1,
  //   onlysong: 0,
  //   new_format: 1,
  // }

  const options = Object.assign(option, {
    params: data,
  });
  return y_common({
    url: '/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
    method,
    options,
  })
    .then(res => {
      const response = res.data;
      return {
        status: 200,
        body: {
          response,
        },
      };
    })
    .catch(error => {
      console.log('error', error);
      return {
        body: {
          error,
        },
      };
    });
};
