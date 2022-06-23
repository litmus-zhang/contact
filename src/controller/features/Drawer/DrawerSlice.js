import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
}

const DrawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        toggleDrawer: (state, action) =>
        {
            state.visible = !state.visible
        },
    }
})


export const {toggleDrawer} = DrawerSlice.actions
export default DrawerSlice.reducer
