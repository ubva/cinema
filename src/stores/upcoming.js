import { defineStore } from 'pinia'
import axios from 'axios'

export const useUpcoming = defineStore('upcoming',{
  state:()=>({
    upcoming: null
  }),
  actions:{
    async getUpcoming (){
      try {
        let res = await axios.get(`${import.meta.env.VITE_PATH}movie/upcoming?api_key=${import.meta.env.VITE_APIKEY}&language=ru-RU&page=1`)
        this.upcoming = res.data.results
      } catch (error) {
        
      }
    }
  }
})
