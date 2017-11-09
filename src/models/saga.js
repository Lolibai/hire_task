// Effects
import { spawn, all } from 'redux-saga/effects'

// Watchers
import toggles from './toggles/saga'

// Subroutines
export default function* root() {
  yield all([
    spawn(toggles)
  ])
}
