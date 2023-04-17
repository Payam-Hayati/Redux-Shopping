import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../FakeData";

export const productsSlice = createSlice({
  name: "products",
  initialState: { value: ProductsData },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.value = state.value.filter(
        (products) => products.id !== action.payload.id
      );
    },
  },
});
export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
