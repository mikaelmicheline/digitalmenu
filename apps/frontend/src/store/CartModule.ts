
import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'
import CartModel from '@/models/CartModel'
import CartProductModel from '@/models/CartProductModel'

type CartModuleState = {
  cart: CartModel | undefined
}

const getters = <GetterTree<CartModuleState, unknown>>{
  getCart: (state: CartModuleState) => (companyId: string): CartModel | undefined => {
    if (!state.cart) return undefined
    if (state.cart.companyId !== companyId) return undefined
    return state.cart
  },
  getCartTotalAmount: (state: CartModuleState) => (companyId: string): number => {
    if (state.cart === undefined) return 0
    if (state.cart.companyId !== companyId) return 0
    return state.cart.products.reduce((acc, cartProduct) => acc + cartProduct.amount, 0)
  },
  getCartTotalValue: (state: CartModuleState) => (companyId: string): number => {
    if (state.cart === undefined) return 0
    if (state.cart.companyId !== companyId) return 0
    return state.cart.products.reduce((acc, cartProduct) => acc + cartProduct.amount * cartProduct.product.salePrice, 0)
  }
}

const mutations = <MutationTree<CartModuleState>>{
  addProduct: (state: CartModuleState, payload: { companyId: string, product: CartProductModel }): void => {
    if (!state.cart || state.cart.companyId !== payload.companyId) {
      state.cart = {
        companyId: payload.companyId,
        products: []
      }
    }

    state.cart.products.push(payload.product)
  },
  editProduct: (state: CartModuleState, payload: { companyId: string, cartProductId: string, amount: number, comments: string }): void => {
    if (!state.cart || state.cart.companyId !== payload.companyId) {
      return
    }

    const index = state.cart.products.findIndex((p) => p.id === payload.cartProductId)
    if (index === -1) return

    const productToEdit = state.cart.products[index]
    productToEdit.amount = payload.amount
    productToEdit.comments = payload.comments
  },
  removeProduct: (state: CartModuleState, payload: { companyId: string, cartProductId: string }): void => {
    if (!state.cart || state.cart.companyId !== payload.companyId) {
      return
    }

    const index = state.cart.products.findIndex((p) => p.id === payload.cartProductId)
    if (index === -1) return
    state.cart.products.splice(index, 1)
  }
}

const actions = <ActionTree<CartModuleState, unknown>>{
  addProduct: (context: ActionContext<CartModuleState, CartModuleState>, { value }): void => {
    context.commit('addProduct', value)
  },
  editProduct: (context: ActionContext<CartModuleState, CartModuleState>, { value }): void => {
    context.commit('editProduct', value)
  },
  removeProduct: (context: ActionContext<CartModuleState, CartModuleState>, { value }): void => {
    context.commit('removeProduct', value)
  }
}

const cartModule: Module<CartModuleState, unknown> = {
  namespaced: true,
  state: { cart: undefined },
  getters,
  mutations,
  actions
}

export default cartModule
