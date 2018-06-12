
export const todos = {
  state: [2, 1, 3],
  reducers: {
    add(state, playload) {
      return [...state, playload];
    }
  }
};

