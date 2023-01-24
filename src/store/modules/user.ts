import { defineStore} from 'pinia'
export const useUserStore = defineStore('appUser',{
  state:()=>{
    return {
     count:0
    }
  },
  getters:{},
  actions:{}
})