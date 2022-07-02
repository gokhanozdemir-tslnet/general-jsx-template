import { createAction } from '../../utils/reducer/reducer.utils'
import { EXAMPLE_ACTION_TYPE } from './example.action.types'

export const fetchData = () => createAction(EXAMPLE_ACTION_TYPE.FETCH_DATA);
export const fetchDataSuccess = (exampledatas) => createAction(EXAMPLE_ACTION_TYPE.FETCH_DATA_SUCCESS, exampledatas)
export const fetchDataFail = (exampleError) => createAction(EXAMPLE_ACTION_TYPE.FETCH_DATA_FAIL, console.error)

export const addData = (todo) => createAction(EXAMPLE_ACTION_TYPE.ADD_DATA,todo);