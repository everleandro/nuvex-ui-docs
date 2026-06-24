import type { PlaygroundPreset, PlaygroundState } from '~/types/docs-playground'

const cloneState = <TState extends PlaygroundState>(value: TState): TState => {
  return JSON.parse(JSON.stringify(value)) as TState
}

export const usePlaygroundState = <TState extends PlaygroundState>(
  initialState: TState,
  presets: PlaygroundPreset<TState>[] = [],
) => {
  const state = reactive<TState>(cloneState(initialState))

  const reset = (): void => {
    Object.assign(state, cloneState(initialState))
  }

  const applyPreset = (presetId: string): void => {
    const preset = presets.find((value) => value.id === presetId)
    if (!preset) {
      return
    }

    Object.assign(state, cloneState(initialState), cloneState(preset.state as TState))
  }

  return {
    state,
    reset,
    applyPreset,
  }
}
