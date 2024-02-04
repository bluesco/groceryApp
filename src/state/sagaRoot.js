import {all} from 'redux-saga/effects';

import {authSagas} from '@src/features/home-auth/redux/auth.saga';
import {categorySagas} from '@src/features/category/redux/category.saga';

function* rootSaga() {
  yield all([...authSagas, , ...categorySagas]);
}

export default rootSaga;