export default (state = null, action) => {
    switch (action.type) {
      case 'selectAction':
        return action.payload;
      default:
        return state;
    }
};
//state will be undefined on startup, hence default it to null
