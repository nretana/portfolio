import { ScreenSize } from '@/@types/screenSize';
import { createSlice } from '@reduxjs/toolkit';

export type ThemeState = {
    currentScreenSize: ScreenSize
}

const initialState: ThemeState = {
    currentScreenSize: 'xsmall'
} 

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setCurrentScreenSize: (state, action) => {
            state.currentScreenSize = action.payload;
        }
    }
});

export const { setCurrentScreenSize } = themeSlice.actions;
export default themeSlice.reducer;