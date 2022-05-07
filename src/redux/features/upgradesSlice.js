import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sum: 0,
  perSecond: 0,
  perClick: 1,
  buildings: [
    {
      name: 'Cursor',
      description: 'Autoclicks once every 10 seconds',
      price: 15,
      info: {
        owned: 0,
        onePerSecond: 0.1,
      },
      id: 0,
    },
    {
      name: 'Grandma',
      description: 'A nice grandma to bake more cookies',
      price: 100,
      info: {
        owned: 0,
        onePerSecond: 1,
      },
      id: 1,
    },
    {
      name: 'Farm',
      description: 'Grows cookie plants from cookie seeds',
      price: 1100,
      info: {
        owned: 0,
        onePerSecond: 8,
      },
      id: 2,
    },
  ],
};

export const upgradesSlice = createSlice({
  name: 'upgrades',
  initialState,
  reducers: {
    increment: (state) => {
      state.sum += 1;
    },
    incrementByAmount: (state, action) => {
      state.sum += action.payload;
    },
    buyUpgrade: (state, action) => {
      const building = state.buildings[action.payload];
      if (state.sum >= building.price) {
        state.sum -= building.price;
        building.price *= 1.15;
        building.info.owned += 1;
        state.perSecond += building.info.owned * building.info.onePerSecond;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount, buyUpgrade } = upgradesSlice.actions;

export default upgradesSlice.reducer;
