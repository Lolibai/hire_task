import { all, takeLatest, put, call, select } from 'redux-saga/effects'
import { toggles_a as actions } from '../_actions.register'
import { toggles_s as selectors } from '../_selectors.register'
import { getTogglesApi } from '../../services/api';
import _ from 'lodash'

function* getTogglesListFlow(action) {
  try {
    const res = yield call(getTogglesApi);
    yield put(actions.getTogglesListSuccess({data: res.data, question: res.question}))
  } catch (e) {
    yield put(actions.getTogglesListFailure({message: 'Something went wrong...'}))
  }
}

function* toggleFlow(action) {
    try {
        const { item } = action.payload;
        const togglesData = yield select(selectors.togglesData);
        let correct = true;
        const res = _.map(togglesData, (o) => {
            if(o.id === item.id) {
                o.active = !o.active;
            }
            if(!!o.active !== o.mustbe) {correct = false};
            return o;
        })
        yield put(actions.toggleSuccess({data: res, correct}))
    } catch (error) {
        
    }
}

export default function* watcher() {
  yield all([
    takeLatest(actions.GET_TOGGLES_LIST_REQUEST, getTogglesListFlow),
    takeLatest(actions.TOGGLE_REQUEST, toggleFlow)
  ]);
}
