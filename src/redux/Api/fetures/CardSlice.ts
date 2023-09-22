import { createSlice} from '@reduxjs/toolkit'
import { IBook } from '../../../types/Book';
import type {PayloadAction } from '@reduxjs/toolkit'
interface ICart {
  books: IBook[];
  total: number;
}
const initialState:ICart = {
  books: [],
  total:0
}

export const CardSlice = createSlice({
  name:'book',
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<IBook>) => {
      const exsist = state.books.find((book) => book._id===action.payload._id)
      if (exsist) {
        exsist.quantity!+=1
      } else {
        state.books.push({...action.payload, quantity: 1})
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IBook>) => {
      const removedBook = state.books.find((book) => book._id === action.payload._id);
      if (removedBook) {
        state.total -= removedBook.price * removedBook.quantity!;
        state.books = state.books.filter((book) => book._id !== action.payload._id);
      }
    },
    increment: (state,action:PayloadAction<IBook>) => {
      const Increment = state.books.find((book) => book._id === action.payload._id)
      if (Increment) {
        Increment.quantity! += 1
        state.total+=action.payload.price
      }
    },
    decrement: (state,action:PayloadAction<IBook>) => {
      const Decrement = state.books.find((book) => book._id === action.payload._id)
      if (Decrement && Decrement.quantity!>1) {
        Decrement.quantity! -= 1
        state.total-=action.payload.price
      }
    }
   

  }
})

export const {addToCard,removeFromCart,increment,decrement} = CardSlice.actions
export default CardSlice.reducer