import {reqGoodInfo,reqAddOrUpdateShopCart} from "@/api"
// 封装游客身份模块uuid---》生成一个随机字符串
import {getUUID} from "@/utils/uuid_token"
const state = {
    goodInfo: {},
    // 游客临时身份
    uuid_token: getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取产品信息的action
    async getGoodInfo({commit}, skuId) {
        let result = await reqGoodInfo(skuId)
        if (result.status== 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result =await reqAddOrUpdateShopCart(skuId,skuNum)
        // 代表服务器加入购物车成功
        if(result.status== 200){
            return "ok"
        }else{
            // 代表加入购物车失败
            return Promise.reject(new Error('faile'))
        }

    }
}
const getters = {
    // 路径导航简化的数据
    categoryView(state){
        return state.goodInfo.data.categoryView||{};
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.data.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.goodInfo.data.spuSaleAttrList||[]
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}