type ContributingCodeSnippet = {
  label: string
  code: string
  language: 'bash' | 'json'
}

export const contributingCodeSnippets: Record<
  'local-setup' | 'pull-request-flow' | 'changelog-policy',
  ContributingCodeSnippet[]
> = {
  'local-setup': [
    {
      label: 'Clone your fork',
      language: 'bash',
      code: `git clone https://github.com/<your-user>/nuvex-ui-docs.git
cd nuvex-ui-docs
npm install`,
    },
    {
      label: 'Build validation',
      language: 'bash',
      code: `npm run build`,
    },
  ],
  'pull-request-flow': [
    {
      label: 'Branch, commit, and push',
      language: 'bash',
      code: `git checkout -b docs/<topic>
git add .
git commit -m "docs: update <topic>"
git push -u origin docs/<topic>`,
    },
    {
      label: 'Pull request body template',
      language: 'bash',
      code: `## Summary
- What problem this solves

## Changes
- Main implementation points

## Validation
- npm run build

## References
- Closes #<issue-number>`,
    },
  ],
  'changelog-policy': [
    {
      label: 'Unreleased entry example',
      language: 'json',
      code: `{
  "type": "docs",
  "summary": "Clarified contributing workflow with code examples.",
  "impact": "No runtime changes.",
  "references": ["#1234"]
}`,
    },
  ],
}
