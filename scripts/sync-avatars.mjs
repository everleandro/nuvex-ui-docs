import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const manifestPath = resolve(process.cwd(), 'assets/avatar-manifest.json')

const outputDir = resolve(process.cwd(), 'public/img/avatar')

const loadManifest = async () => {
  const raw = await readFile(manifestPath, 'utf8')
  const parsed = JSON.parse(raw)

  if (!Array.isArray(parsed)) {
    throw new Error('Avatar manifest must be an array')
  }

  return parsed
}

const downloadAvatar = async ({ avatarFile, pravatarId }) => {
  const url = `https://i.pravatar.cc/150?img=${pravatarId}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to download ${url} (${response.status})`)
  }

  const bytes = Buffer.from(await response.arrayBuffer())
  const targetPath = resolve(outputDir, avatarFile)
  await writeFile(targetPath, bytes)

  return targetPath
}

const run = async () => {
  await mkdir(outputDir, { recursive: true })
  const avatars = await loadManifest()

  const results = await Promise.allSettled(avatars.map(downloadAvatar))

  let failures = 0
  for (const result of results) {
    if (result.status === 'fulfilled') {
      console.log(`saved ${result.value}`)
      continue
    }

    failures += 1
    console.error(result.reason)
  }

  if (failures > 0) {
    process.exitCode = 1
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
