import { v4 as idv4 } from 'uuid';
import { GET_ENTRIES, ADD_ENTRY, DELETE_ENTRY } from '../actions/types';

const initialState = {
  entries: [
    {
      idEntry: idv4(),
      firstName: 'John',
      lastName: 'doe',
      reason: 'idk',
    },
    {
      idEntry: idv4(),
      firstName: 'John',
      lastName: 'Doe',
      reason: 'idk',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(
          entry => entry.idEntry !== action.payload
        ),
      };
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    default:
      return state;
  }
}
