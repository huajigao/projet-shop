import { reqGetSearchInfo } from "@/api"
// search模块的小仓库
const state = {
    // 仓库初始状态
    searchList:{},
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    // 获取search模块的数据
    async getSearchList({commit}){
        // 当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数(空对象)
        // params形参：是当用户派发action的时候，第二份参数传递过来的，至少是一个空对象
        let result = await  reqGetSearchInfo()
        if(result.status ==200){
            commit('GETSEARCHLIST', result.data)
        }
    }
}
// 计算属性，在项目中，为了简化数据而生
// 可以把我们将来在组件当中需要用的数据简化一下(将来组件在获取数据的时候就方便了)
const getters = {
    // 当前形参state：当前仓库中的state，并非大仓库中的那个state
    goodsList(state) {
        // 假如没有网络，网络不给力state.searchList.data.data.goodsList应该返回的是undefined
        return state.searchList.data.data.goodsList ||[];
    },
    trademarkList(state) {
        return state.searchList.data.data.trademarkList ||[]
    },
    attrsList(state) {
        return state.searchList.data.data.attrsList ||[]
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}