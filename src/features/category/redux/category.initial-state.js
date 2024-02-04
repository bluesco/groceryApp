export const initialState = Object.freeze({
  showLoading: false,
  actionLoading: null,
  errorCategory: null,
  categories: {
    list: {},
    pagination: {
      current: 0,
      limit: 0,
      total: 0,
    },
  },
});
