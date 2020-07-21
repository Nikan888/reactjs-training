export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("Action: ", action);
  let result = next(action);
  console.log("State: ", store.getState());
  console.groupEnd();
  return result;
};
