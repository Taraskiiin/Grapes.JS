export const initialState = { component: {}}

const setEdit = (
  state = initialState,
  action: { type: string; payload: {component: {}} }
) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_EDIT":
      return {
        ...state,
        component: payload,
      };
    default:
      return state;
  }
};

export default setEdit;
