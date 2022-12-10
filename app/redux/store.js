import { configureStore } from '@reduxjs/toolkit';
import ShiftsListReducer from './slice';

export const store = configureStore({
    reducer: {
        ShiftsList: ShiftsListReducer,
    },
});