import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    showDrawer: false,
  },
  reducers: {
    setShowDrawer: (state, action) => {
      state.showDrawer = action.payload;
    },
  },
});

export const { actions, reducer } = headerSlice;

export const setShowDrawer = (values) => async (dispatch) => {
  dispatch(actions.setShowDrawer(values));
};

export default reducer;
