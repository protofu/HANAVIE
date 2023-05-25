import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'
const API_KEY = 'c12ca67b05f1378e09cf647da6b26b3e'


export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    movies: [],
    movieGenre: [],
    cosMovies: [],
    similarMovies: [],
    youtubeVideos: [],
    top5Movies: [],
    recommendations: [],
    token: null,
    username: null,
    communities: [],
    reviews: [],
    profile: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    GET_COS_MOVIE(state, cosMovies) {
      state.cosMovies = cosMovies
    },
    GET_SIMILAR_MOVIE(state, similarMovies) {
      state.similarMovies = similarMovies
    },
    SEARCH_YOUTUBE: function (state, videos) {
      state.youtubeVideos = videos
    },
    GET_TOP5_MOVIES(state, top5Movies) {
      state.top5Movies = top5Movies
    },
    GET_RECOMENDED(state, recommendations) {
      state.recommendations = recommendations
    },
    SAVE_TOKEN(state, userInfo) {
      state.token = userInfo.token
      state.username = userInfo.username
      router.push({ name: 'Home' })
    },
    GET_COMMUNITY_LIST(state, communities) {
      state.communities = communities
    },
    LOGOUT(state) {
      state.token = ! state.token
      state.username = ''
      router.push({ name: 'Home' })
    },
    GET_PROFILE(state, profile) {
      state.profile = profile
    }
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/movies/`,
        // headers: {
        //   Authorization: `Token ${context.state.token}`
        // },
      })
        .then((res) => {
          // console.log(res)
          context.commit('GET_MOVIES', res.data)
        })
        .catch(err => console.log(err))
    },
    getCosMovie(context, movie_id){
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
      })
        .then(res => {
          // console.log(res.data.results)
          const movies = res.data.results.filter(movie => {
            return movie.poster_path
          })
          context.commit('GET_COS_MOVIE', movies)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSimilarMovie(context, movie_id){
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=ko-KR&page=1`
      })
      .then(res => {
        // console.log(res.data.results)
        const movies = res.data.results.filter(movie => {
          return movie.poster_path
        })
        context.commit('GET_SIMILAR_MOVIE', movies)
      })
      .catch(err => {
        console.log(err)
      })
    },
    // YOUTUBE ACTIONS
    searchYoutube(context, movie_id) {
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=ko-KR`
      })
        .then(res => {
          context.commit('SEARCH_YOUTUBE', res.data.results)
        })
        .catch(err => console.log(err))
    },
    // 인기도 탑 5
    getTop5Movies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/movies/`,
        // headers: {
        //   Authorization: `Token ${context.state.token}`
        // },
      })
        .then((res) => {
          // console.log(res)
          const movies = res.data
          _.sortBy(movies, 'vote_average').reverse()
          const top5Movies = movies.slice(0, 5)
          // console.log(top5Movies)
          context.commit('GET_TOP5_MOVIES', top5Movies)
        })
        .catch(err => console.log(err))
    },
    getRecommended(context) {
      axios({
        method: 'get',
        url: `${API_URL}/movies/recommended/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
      })
        .then((res) => {
          // console.log(res)
          // console.log('recommendation sucess')
          context.commit('GET_RECOMENDED', res.data)
        })
        .catch(err => console.log(err))
    },
    signUp(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
            username: payload.username,
            password1: payload.password1,
            password2: payload.password2,
        }
      })
        .then((res) => {
          const userInfo = {
            username: payload.username,
            token: res.data.key
          }
          context.commit('SAVE_TOKEN', userInfo)
        })
        .catch(err => console.log(err))
    },
    logIn(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          const userInfo = {
            username: payload.username,
            token: res.data.key
          }
          context.commit('SAVE_TOKEN', userInfo)

          axios({
            method: 'get',
            url: `${API_URL}/userinfo/${payload.username}/`,
            headers: {
              Authorization: `Token ${res.data.key}`
            }
          })
            .then(() => {
              context.commit('GET_PROFILE')
            })
        })
        .catch(err => console.log(err))     
    },
    getCommunityList(context) {
      axios({
        method: 'get',
        url: `${API_URL}/community/community_list_create/`,
        // headers: {
        //   Authorization: `Token ${this.state.token}`
        // },
      })
        .then((res) => {
          // console.log(res)
          context.commit('GET_COMMUNITY_LIST', res.data)
        })
    },

    // getProfile(context) {
    //   axios({
    //     method: 'get',
    //     url: `${API_URL}/accounts/user/`,
    //     headers: {
    //       Authorization: `Token ${context.state.token}`
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res)
    //       context.commit('GET_PROFILE', res.data)
    //     })
    //     .catch(err => console.log(err))
    // }
  },
  modules: {
  }
})
