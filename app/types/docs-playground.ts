export type PlaygroundPrimitive = string | number | boolean | null

export type PlaygroundState = Record<string, PlaygroundPrimitive>

export interface PlaygroundSelectOption {
  label: string
  value: string | number
}

export interface PlaygroundControlBase {
  key: string
  label: string
  description?: string
  defaultValue?: PlaygroundPrimitive
}

export interface PlaygroundBooleanControl extends PlaygroundControlBase {
  type: 'boolean'
}

export interface PlaygroundTextControl extends PlaygroundControlBase {
  type: 'text'
  placeholder?: string
}

export interface PlaygroundNumberControl extends PlaygroundControlBase {
  type: 'number'
  min?: number
  max?: number
  step?: number
}

export interface PlaygroundSelectControl extends PlaygroundControlBase {
  type: 'select'
  options: PlaygroundSelectOption[]
}

export interface PlaygroundColorControl extends PlaygroundControlBase {
  type: 'color'
}

export type PlaygroundControl =
  | PlaygroundBooleanControl
  | PlaygroundTextControl
  | PlaygroundNumberControl
  | PlaygroundSelectControl
  | PlaygroundColorControl

export interface PlaygroundPreset<TState extends PlaygroundState = PlaygroundState> {
  id: string
  label: string
  state: Partial<TState>
}

export interface SnippetBuildResult {
  template: string
  scriptSetup?: string
  style?: string
  full?: string
}

export type SnippetBuilder<TState extends PlaygroundState = PlaygroundState> = (
  state: TState,
  context?: { componentTag?: string },
) => SnippetBuildResult
