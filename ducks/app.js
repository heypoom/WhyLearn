import {createReducer, Action} from './helper'

const JUMP_TO = 'JUMP_TO'
const NEXT_SCENE = 'NEXT_SCENE'

const jumpTo = Action(JUMP_TO)
const nextScene = Action(NEXT_SCENE)

const initial = {
  scene: 0
}

export function* appWatcherSaga() {

}

export default createReducer(initial, state => ({
  [JUMP_TO]: scene => ({
    ...state,
    scene
  }),
  [NEXT_SCENE]: () => ({
    ...state,
    scene: state.scene + 1
  })
}))

