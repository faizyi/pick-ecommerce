"use client"
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isOpenSidebar : false
}
export const sidebarSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        showSidebar: (state) => {
            state.isOpenSidebar = !state.isOpenSidebar
        },
        hideSidebar: (state) => {
            state.isOpenSidebar = false
        }
    }
})

export const { showSidebar, hideSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer