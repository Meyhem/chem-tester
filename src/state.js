import { atom, useRecoilState } from 'recoil'

function persistedAtom(cfg) {
  return atom({
    ...cfg,
    default: JSON.parse(localStorage.getItem(cfg.key)) || cfg.default,
  })
}

export const setupState = persistedAtom({
  key: 'setupState',
  default: {
    quizType: 'all',
    questionCount: 10,
  },
})

export const quizState = persistedAtom({
  key: 'quizState',
  default: [],
})

export const inTestState = persistedAtom({
  key: 'inTestState',
  default: false,
})

export function usePersistedState(recoilState) {
  const [state, setState] = useRecoilState(recoilState)

  return [
    state,
    v => {
      setState(v)
      localStorage.setItem(recoilState.key, JSON.stringify(v))
    },
  ]
}
