// Core
import { put, apply } from 'redux-saga/effects';
// Components
import { api } from '../../../../REST';
import { photosActions } from '../../actions';

export function* fillPhotos () {
    try {
        const response = yield apply(api, api.photos.fetch);
        const photos = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        const availableField = ['id', 'description', 'urls', 'user'].sort((a, b) => a < b);
        const shortPhotos = photos.map((p) => {
            const newP = {};

            for (const key in p) {
                if (availableField.indexOf(key) > -1) {
                    newP[key] = p[key];
                }
            }

            return newP;
        });

        yield put(photosActions.fillPhotos(shortPhotos));
    } catch
    (error) {
    } finally {

    }
}
