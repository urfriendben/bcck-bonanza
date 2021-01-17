import dashboardData from '@/assets/dashboard-items.json';

const appReducer = function (state = {
  menu: false,
  menuItems: [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'RPG',
      url: '/rpg'
    },
    {
      name: 'Arcade',
      url: '/arcade'
    },
    {
      name: 'Brain Games',
      url: '/braingames'
    }
  ],
  additionalMenuItems: [
    {
      name: 'Support',
      url: '/support'
    },
    {
      name: 'Contact Us',
      url: '/contactus'
    }
  ],
  dashboard: {
    content: dashboardData
  }
}, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {...state, menu: action.value !== null ? action.value : !state.menu};
    default:
      return state;
  }
};

export default appReducer;
