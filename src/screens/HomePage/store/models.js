
export const count = {
  state: 2,
  reducers: {
    add(state) {
      return state + 1;
    }
  }
};


export const num = {
  state: 100,
  effects: {
    update(state, playload) {
      return playload;
    }
  }
};
