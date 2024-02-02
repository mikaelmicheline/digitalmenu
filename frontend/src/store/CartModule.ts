
import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'
import CartModel from '@/models/CartModel'

type CartModuleState = {
  cart: CartModel | undefined
}

const getters = <GetterTree<CartModuleState, unknown>>{
  getCart: (state: CartModuleState) => (companyId: string): CartModel | undefined => {
    if (!state.cart) return undefined
    if (state.cart.companyId !== companyId) return undefined
    return state.cart
  },
  getCartTotalAmountBy: (state: CartModuleState) => (companyId: string): number => {
    if (state.cart === undefined) return 0
    if (state.cart.companyId !== companyId) return 0
    return state.cart.products.reduce((acc, cartProduct) => acc + cartProduct.amount, 0)
  },
  getCartTotalValueBy: (state: CartModuleState) => (companyId: string): number => {
    if (state.cart === undefined) return 0
    if (state.cart.companyId !== companyId) return 0
    return state.cart.products.reduce((acc, cartProduct) => acc + cartProduct.amount * cartProduct.product.salePrice, 0)
  }
}

// const mutations = <MutationTree<CartModuleState>>{
//   setCompany: (state: CartModuleState, payload: { company: CartModel }): void => {
//     state.company = payload.company
//   }
// }

// const actions = <ActionTree<CartModuleState, unknown>>{
//   setCompany: (context: ActionContext<CartModuleState, CartModuleState>, { value }): void => {
//     context.commit('setCompany', value)
//   }
// }

const cartModule: Module<CartModuleState, unknown> = {
  namespaced: true,
  state: { cart: undefined },
  getters
  // mutations,
  // actions
}

export default cartModule

/*

const mutations = <MutationTree<Carts>>{
  increaseProductAmount: (state: Carts, payload: {companyId: string, productToIncreaseAmount: Product}): void => {
    const { companyId, productToIncreaseAmount } = payload
    let cart = state.carts.find(cart => cart.companyId === companyId)

    if (cart === undefined) {
      cart = {
        companyId: companyId,
        products: []
      }
      state.carts.push(cart)
    }

    const productIndex = cart.products.findIndex(listProduct => listProduct.productId === productToIncreaseAmount.productId)
    if (productIndex > -1) {
      cart.products[productIndex].amount += 1
      return
    }

    cart.products.push({
      ...productToIncreaseAmount,
      amount: 1
    })
  },
  decreaseProductAmount: (state: Carts, payload: {companyId: string, productToDecreaseAmount: Product}): void => {
    const { companyId, productToDecreaseAmount } = payload
    const cart = state.carts.find(cart => cart.companyId === companyId)

    if (cart === undefined) {
      return
    }

    const productIndex = cart.products.findIndex(listProduct => listProduct.productId === productToDecreaseAmount.productId)
    if (productIndex === -1) {
      return
    }

    cart.products[productIndex].amount -= 1
    if (cart.products[productIndex].amount < 1) {
      cart.products.splice(productIndex, 1)
    }
  },
  removeProduct: (state: Carts, payload: {companyId: string, productToRemove: Product}): void => {
    const { companyId, productToRemove } = payload
    const cart = state.carts.find(cart => cart.companyId === companyId)

    if (cart === undefined) {
      return
    }

    const productIndex = cart.products.findIndex(listProduct => listProduct.productId === productToRemove.productId)
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1)
    }
  }
}

const actions = <ActionTree<Carts, unknown>>{
  increaseProductAmount: (context: ActionContext<Carts, unknown>, { value }): void => {
    context.commit('increaseProductAmount', value)
  },
  decreaseProductAmount: (context: ActionContext<Carts, unknown>, { value }): void => {
    context.commit('decreaseProductAmount', value)
  },
  removeProduct: (context: ActionContext<Carts, unknown>, { value }): void => {
    context.commit('removeProduct', value)
  }
}

*/
