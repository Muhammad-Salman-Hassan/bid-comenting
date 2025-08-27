import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    loading: false,

};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {},
});

export default globalSlice.reducer; 
