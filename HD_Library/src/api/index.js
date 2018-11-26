import {
  requestGet,
  requestPost
} from "../utils/request";

const api = {
  photoList: ({
    id,
    page
  }) => requestGet('https://api.liantu.cn/touxiang/json.asp', {
    id,
    page
  }),
  classifyList: () => requestGet('https://www.easy-mock.com/mock/5b496ac04ddc075ff3d24f33/api/gq_photo_classify'),
  searchKeyword: ({
    keyword,
    page
  }) => requestGet('https://api.liantu.cn/touxiang/search.asp', {
    keyword,
    page
  })
};

export default api;