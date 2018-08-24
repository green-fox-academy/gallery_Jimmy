export function rightMove() {
  return {
    type: 'Right',
    count: 1,
  };
}

export function leftMove() {
  return {
    type: 'Left',
    count: -1,
  };
}

export function select(index) {
  return {
    type: 'Select',
    count: index,
  };
}
