import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: Number(localStorage.getItem('counter')) || 0,
}



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            localStorage.setItem('counter', state.value.toString());
        },
        decrement: (state) => {
            state.value -= 1;
            localStorage.setItem('counter', state.value.toString());
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            localStorage.setItem('counter', state.value.toString());
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer;