/* eslint-disable */ 
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {axiosAuthInstance} from '@/_helpers/apiHelpers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
  },



  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },



  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },

  // var data1 =  {grant_type:"password", client_id:"demo", username : "myuseer", password: 'zasx'}


  actions: {

    login({commit}, dataUser){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axiosAuthInstance.post('/', dataUser)
          .then(resp => {
            const token = resp.data.access_token
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            commit('auth_success', token)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            reject(err)
          })
      })
    },

    logout({commit}){
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
     }

  },


  modules: {
  }
})
