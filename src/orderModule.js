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

export const useCartStore = defineStore({
    id:'cartItems',
    state: () => ({
        cartItems: []
    }),
    actions: {
        addToCart(product) {
            this.cartItems.push(product)
        }
    },
    getters: {
        cartItemCount(){
            return this.cartItems.length
        }
    }
})