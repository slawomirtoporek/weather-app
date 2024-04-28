import shortid from "shortid";

// selectors
export const getAllWeather = ({ weather }) => weather;
export const getLastWeather = state => {
  const allWeather = getAllWeather(state);
  return allWeather.length > 0 ? allWeather[allWeather.length - 1] : null;
};

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_WEATHER = createActionName('ADD_WEATHER');

// actioncreators
export const addWeather = payload => ({ type: ADD_WEATHER, payload });

const weatherReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_WEATHER:
      return [...statePart, { id: shortid(), ...action.payload }];
    default:
      return statePart;
  };
};

export default weatherReducer;