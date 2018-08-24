function changeIndex(index = 0, action) {
  switch (action.type) {
    case 'Right':
      return (index + action.count) % 8;
    case 'Left':
      return (index + 8 + action.count) % 8;
    case 'Select':
      return action.count;
    default:
      return index % 8;
  }
}

export default changeIndex;
