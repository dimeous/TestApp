//Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watcherPhotos } from '../modules/photos/saga/watchers';

export function* rootSaga () {
    yield all([
        call(watcherPhotos)
    ]);
}
