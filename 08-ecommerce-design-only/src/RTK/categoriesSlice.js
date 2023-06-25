import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../Api/baseURL";
import useGetData from "../hooks/useGetData";
const initialState = { categories: {}, loading: true, error: null };
export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (limit, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      //   const res = await baseUrl.get("/api/v1/categories");
      const res = await useGetData(`/api/v1/categories?limit=${limit}`);
      console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const categories = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = { ...action.payload };
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});
export default categories.reducer;
