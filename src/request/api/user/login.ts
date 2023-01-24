import { Login } from '@/request/model/user/login';
import request from '@/utils/axios';
/**
 * 登录
 * @param {string} url 请求连接
 * @param {Object} params 请求参数
 * @param {Object} header 请求需要设置的header头
 */
 export default class LoginApi {
   static login (data: Login) {
    return request({
      url: '/api/member/loginPw',
      method: 'post',
      data: data
    });
   }
}




