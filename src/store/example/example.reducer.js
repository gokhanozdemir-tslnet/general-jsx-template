import { EXAMPLE_ACTION_TYPE } from './example.action.types'

const EXAMPLE_INITIAL_STATE = {
  data: [
    {
      id: 1,
      description: 'test1',
      isDone: false
    }
  ],
  isLoading: false,
  error: ''
}

export const exampleReducer = (state = EXAMPLE_INITIAL_STATE , action) => {

  switch (action.type) {
    case EXAMPLE_ACTION_TYPE.FETCH_DATA_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: ''
      }
    case EXAMPLE_ACTION_TYPE.FETCH_DATA_FAIL:
      return {
        data: [],
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}
