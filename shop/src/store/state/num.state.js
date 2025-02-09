export default{
    namespaced:true,
    state: {
        count:1
      },
      //计算state，获取对应值
      getters: {
        countStatus(state){
          return state.count<= 1
        }
      },
      //更新state的方法，更新state的唯一方法，commit mutations
      mutations: {
        setCount(state, num){
          state.count = num
        }
      },
      //可以异步操作，可以返回promise，更改数据还是传递到mutations去更改
      actions: {
        setCountPromise(context, num){
          return new Promise((resolve, reject) => {
            if(num > 100){
              reject("值不能大于100")
            }else{
              context.commit("setCount", num)
              resolve()
            }
          })
        }
      },
      //数据比较多，分模块
      modules: {
      }
}