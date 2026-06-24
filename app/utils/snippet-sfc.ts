import type { SnippetBuildResult } from '~/types/docs-playground'

const SCRIPT_OPEN_TAG = '<script setup lang="ts">'
const SCRIPT_CLOSE_TAG = '</' + 'script>'
const STYLE_OPEN_TAG = '<style scoped>'
const STYLE_CLOSE_TAG = '</' + 'style>'

export const buildSfcSnippet = (result: SnippetBuildResult): string => {
  if (result.full) {
    return result.full
  }

  const chunks: string[] = []
  chunks.push('<template>')
  chunks.push(result.template)
  chunks.push('</template>')

  if (result.scriptSetup) {
    chunks.push('')
    chunks.push(SCRIPT_OPEN_TAG)
    chunks.push(result.scriptSetup)
    chunks.push(SCRIPT_CLOSE_TAG)
  }

  if (result.style) {
    chunks.push('')
    chunks.push(STYLE_OPEN_TAG)
    chunks.push(result.style)
    chunks.push(STYLE_CLOSE_TAG)
  }

  return chunks.join('\n')
}
