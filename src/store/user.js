import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'
// 登录和注册模块
const state = {
    code:'',
    token:getToken(),
    userInfo:{}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(){
        // 把仓库中相关用户信息清空
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}
const actions = {
    //获取验证码
  async getCode({ commit }, phone) {
    //获取验证码的这个接口：把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】
    let result = await reqGetCode(phone);
    if (result.status == 200) {
      commit("GETCODE", result.data.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.status == 200) {
          return "ok";
        } else {
          return Promise.reject(new Error("faile"));
        }
    },
    // 登录业务
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        if(result.status == 200) {
            // 用户已经登录成功且获取到token
            commit("USERLOGIN", result.data.data.token);
            // 持久化存储token
            setToken(result.data.data.token)
            return "ok";
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.status == 200) {
            commit('GETUSERINFO', result.data)
            return "ok";
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    // 退出登录
    async userLogout({commit}){
        // 只是向服务器发起一次请求，通知服务器清除token
        let result = await reqLogout()
        // action
        if(result.status == 200) {
            commit('CLEAR',)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}