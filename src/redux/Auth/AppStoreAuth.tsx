import { createSlice, PayloadAction} from "@reduxjs/toolkit"


export interface CounterState{
    value: number
}

const initialState : CounterState ={
    value: 0,
}

export const AppStoreAuth = createSlice({
    name: 'app-counter',
    initialState,
    reducers:{
        increment: (state) =>{
            state.value  += 1;
        },
        decrement: (state) =>{
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
          },
    }
});

export const { increment, decrement, incrementByAmount } = AppStoreAuth.actions;
export default AppStoreAuth.reducer;