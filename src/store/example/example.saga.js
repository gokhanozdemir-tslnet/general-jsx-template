import { put, takeLatest, all, call } from 'redux-saga/effects'
import ServiceHelper from '../../utils/reducer/helpers/api/ServiceHelper'

import { fetchDataFail, fetchDataSuccess } from './example.action'
import { EXAMPLE_ACTION_TYPE } from './example.action.types'

function * fetchData () {
  try {
    const serviceApi = new ServiceHelper()
    const response = yield call(serviceApi.getAsync)

    yield put(fetchDataSuccess(response.data))
  } catch (error) {
    yield put(fetchDataFail(new Error(error.message)))
  }
}

function * addData ({ type, payload }) {
  try {
    console.log('add')
    console.log(payload)
    console.log(type)
    const client = new ServiceHelper()
    const response = yield call(client.postAsync, payload);
  } catch (error) {
    yield put(fetchDataFail(new Error(error.message)))
  }
}

export function * onFetchData () {
  yield takeLatest(EXAMPLE_ACTION_TYPE.FETCH_DATA, fetchData)
}
export function * onAddData () {
  yield takeLatest(EXAMPLE_ACTION_TYPE.ADD_DATA, addData)
}

export function * exampleSaga () {
  yield all([call(onFetchData)])
}
