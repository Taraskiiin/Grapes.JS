export const initialState = { component: {}}

const getHtml = (
  state = initialState,
  action: { type: string; payload: {component: {}} }
) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_HTML":
      return {
        ...state,
        component: payload,
      };
    default:
      return state;
  }
};

export default getHtml;
