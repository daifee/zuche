

export const count = {
  state: 2,
  reducers: {
    add(state, payload) {
      return state + payload;
    }
  }
};


export const num = {
  state: 100,
  effects: {
    update(payload, rootState) {
      return rootState;
    }
  }
};
