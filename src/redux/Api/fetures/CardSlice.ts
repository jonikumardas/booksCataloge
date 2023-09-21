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
      state.total+=action.payload.price
    }
    
  }
})

export const {addToCard} = CardSlice.actions
export default CardSlice.reducer