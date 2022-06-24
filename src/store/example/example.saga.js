import { put, takeLatest, all, call } from 'redux-saga/effects'
import ServiceClient from '../../utils/reducer/helpers/axiosServiceHelper'
import { fetchDataFail, fetchDataSuccess } from './example.action'
import { EXAMPLE_ACTION_TYPE } from './example.action.types'

function * fetchData () {
  try {
    const serviceApi = new ServiceClient()
    const response = yield call(serviceApi.getProductsAsync, 1)

    yield put(fetchDataSuccess(response.data))
  } catch (error) {
    yield put(fetchDataFail(new Error(error.message)))
  }
}

export function * onFetchData () {
  yield takeLatest(EXAMPLE_ACTION_TYPE.FETCH_DATA, fetchData)
}

export function * exampleSaga () {
  yield all([call(onFetchData)])
}
