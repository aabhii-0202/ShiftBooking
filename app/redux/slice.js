import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'ShiftsList',
  initialState: {
    Shifts: [
      {
        area: 'Helsinki',
        startTime: { hour: 12 },
        endTime: { hour: 14 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 10 },
        endTime: { hour: 12 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 16 },
        endTime: { hour: 17, minutes: 30 },
      },
      {
        area: 'Turku',
        startTime: { hour: 16 },
        endTime: { hour: 17, minutes: 30 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 11 },
        endTime: { hour: 13 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 10 },
        endTime: { hour: 15 },
      },
      {
        area: 'Turku',
        startTime: { hour: 10 },
        endTime: { hour: 11, minutes: 30 },
      },
      {
        area: 'Turku',
        startTime: { hour: 11 },
        endTime: { hour: 13 },
      },
      {
        area: 'Turku',
        startTime: { hour: 10 },
        endTime: { hour: 12 },
      },
      {
        area: 'Turku',
        startTime: { hour: 18 },
        endTime: { hour: 20 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 9 },
        endTime: { hour: 12 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 10 },
        endTime: { hour: 12 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 12 },
        endTime: { hour: 14 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 14 },
        endTime: { hour: 16, minutes: 30 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 12 },
        endTime: { hour: 14 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 14 },
        endTime: { hour: 16, minutes: 30 },
      },
      {
        area: 'Turku',
        startTime: { hour: 12 },
        endTime: { hour: 14 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 14 },
        endTime: { hour: 16, minutes: 30 },
      },
      {
        area: 'Turku',
        startTime: { hour: 9 },
        endTime: { hour: 10 },
      },
      {
        area: 'Turku',
        startTime: { hour: 10 },
        endTime: { hour: 12, minutes: 30 },
      },
      {
        area: 'Turku',
        startTime: { hour: 12, minutes: 30 },
        endTime: { hour: 15 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 10 },
        endTime: { hour: 14, minutes: 30 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 14 },
        endTime: { hour: 16, minutes: 30 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 10 },
        endTime: { hour: 12 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 12 },
        endTime: { hour: 14 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 13 },
        endTime: { hour: 15 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 9 },
        endTime: { hour: 11 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 11 },
        endTime: { hour: 13, minutes: 30 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 12 },
        endTime: { hour: 15 },
      },
      {
        area: 'Helsinki',
        startTime: { hour: 18 },
        endTime: { hour: 21 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 9 },
        endTime: { hour: 12 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 12 },
        endTime: { hour: 15, minutes: 30 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 15 },
        endTime: { hour: 18 },
      },
      {
        area: 'Tampere',
        startTime: { hour: 17 },
        endTime: { hour: 20 },
      },
    ],
  },
  reducers: {
    addItems: (state, action) => {
        state.Shifts = [...action.payload];
    },
  },
});

export const { addItems } = newsSlice.actions;

export default newsSlice.reducer;
