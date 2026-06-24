import type { PlaygroundState, SnippetBuildResult, SnippetBuilder } from '~/types/docs-playground'
import { buildSfcSnippet } from '~/utils/snippet-sfc'

const buildFullSnippet = (result: SnippetBuildResult): string => {
  return buildSfcSnippet(result)
}

export const useSnippetGenerator = <TState extends PlaygroundState>(
  state: TState,
  snippetBuilder: SnippetBuilder<TState>,
  context?: { componentTag?: string },
) => {
  const snippet = computed<SnippetBuildResult>(() => {
    return snippetBuilder(state, context)
  })

  const fullSnippet = computed<string>(() => {
    return buildFullSnippet(snippet.value)
  })

  return {
    snippet,
    fullSnippet,
  }
}
