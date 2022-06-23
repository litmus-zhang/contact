import { configureStore } from "@reduxjs/toolkit";
import DrawerReducer from "./features/Drawer/DrawerSlice";

export const store = configureStore({
    reducer: {
        drawer: DrawerReducer,
    }
})


