import { defineStore } from 'pinia'

export const useOrderStore = defineStore({
  id: 'order',
  state: () => ({
      orders: []
  }),
  actions: {
      addOrder(order) {
          this.orders.push(order)
      }
  }
})