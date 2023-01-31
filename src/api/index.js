// 当前这个模块：API进行统一管理
import requests from './ajax'
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList  get请求  无参数
// 发送请求：axios发送请求返回结果Promise对象

export const reqgetCategoryList =()=>requests.get(`/api/product/getBaseCategoryList`)
// 切记：当前函数执行需要把服务器返回结果返回

// 获取banner(Home首页轮播图接口)
export const reqGetBannerList =()=>mockRequests.get('/mock/banner')

// 获取floor数据
export const reqFloorList =()=>mockRequests.get('/mock/floor')

// 获取搜索模块数据地址：/api/list   请求方式：post   参数：需要带参数
/* 
    

*/
// 当前这个函数需要接收外部传递参数
// 当前这个接口：给服务器传递参数params，至少是一个空对象
// export const reqGetSearchInfo =(params)=> requests({url:'/api/list',method:'post',data:params}); // 接口数据
export const reqGetSearchInfo =()=> mockRequests.get('/mock/look') //模拟数据(接口数据链接不上用)


// 获取产品详情信息的接口：URL:/api/item/{skuId} 请求方式：get
export const reqGoodInfo = (skuId) => requests ({url:`api/item/${skuId}`,method:'get'})


// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart =(skuId, skuNum) => requests({url:`api/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})


// 获取购物车列表数据接口
// URL:/api/cart/cartList  method:get
export const reqCartList = ()=>requests({url:'api/cart/cartList',method:'get'})

// URL:/api/cart/deleteCart/{skuId}  method:delete
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

// 修改商品选中状态
// URL:/api/cart/checkCart/{skuID}/{isChecked} method:GET
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`api/cart/checkCart/${skuID}/${isChecked}`,method:'get'})

// 获取验证码
// URL：/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone)=>requests({url:`api/user/passport/sendCode/${phone}`,method:'get'})

// 注册
// URL：/api/user/passport/register method:post
export const reqUserRegister = (data)=>requests({url:'api/user/passport/register',data,method:'post'});

// 登录
// URL：/api/user/passport/login  method:post
export const reqUserLogin = (data)=>requests({url:'api/user/passport/login',data,method:'post'})

// 获取用户信息【需要带着用户的token向服务器要用户信息】
// URL：/api/user/passport/auth/getUserInfo   method：get
export const reqUserInfo=()=>requests({url:'api/user/passport/auth/getUserInfo',method:'get'})

// 退出登录
// URL：/api/user/passport/logout  method:get
export const reqLogout = ()=>requests({url:'api/user/passport/logout',method:'get'})

// 获取用户地址信息
// URL：/api/user/userAddress/auth/findUserAddressList method:get
export const reqAddressInfo = ()=>requests({url:'api/user/userAddress/auth/findUserAddressList',method:'get'})

// 获取商品清单
// URL：/api/order/auth/trade  method：get
export const reqOrderInfo = ()=>requests({url:'api/order/auth/trade',method:'get'})

// 提交订单的接口
// URL:/api/order/auth/submitOrder?tradeNo={tradeNo} method:post
export const reqSubmitOrder = (tradeNo,data)=>reqUserRegister({url:`api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取支付信息
// URL：/api/payment/weixin/createNative/{orderId}  method：get
export const reqPayInfo = (orderId)=>requests({url:`api/payment/weixin/createNative/${orderId}`,method:'get'})

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  method：get
export  const reqPayStatus = (orderId)=>requests({url:`api/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

//获取个人中心的数据
//api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page,limit)=>requests({url:`api/order/auth/${page}/${limit}`,method:'get'});