import dashboardData from '@/assets/dashboard-items.json';

const homeReducer = function (state = {
  dashboard: {
    content: dashboardData
  }
}, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
