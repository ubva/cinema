import { defineStore } from 'pinia'
import axios from 'axios'

export const usePopular = defineStore('popular',{
  state:()=>({
    movie: null,
    tv:null
  }),
  actions:{
    async getPopular (type){
      try {
        let res = await axios.get(`${import.meta.env.VITE_PATH}${type}/popular?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=1`)
        this[type] = res.data.results
      } catch (error) {
        
      }
    }
  }
})
