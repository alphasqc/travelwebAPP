import { createStore } from 'vuex'

export default createStore({
  state: {
    userinfo: JSON.parse(localStorage.getItem('userinfo')) || {
      name: '',
      password: '',
      aginpassword: '',
      tel: '',
      mail: ''
    }
  },
  getters: {
  },
  mutations: {
    // setUserInfo: (state, info) => {
    //   state.userInfo = info
    //   localStorage.setItem('userInfo', JSON.stringify(info))
    // }
  },
  actions: {
  },
  modules: {
  }
})
