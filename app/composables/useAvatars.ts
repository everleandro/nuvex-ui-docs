import avatarManifest from '~~/assets/avatar-manifest.json'

export type AvatarManifestEntry = {
  id: string
  name: string
  email: string
  avatarFile: string
  pravatarId: number
}

export type AvatarItem = {
  id: string
  name: string
  email: string
  avatarSrc: string
}

const avatarItems: AvatarItem[] = (avatarManifest as AvatarManifestEntry[]).map((entry) => ({
  id: entry.id,
  name: entry.name,
  email: entry.email,
  avatarSrc: `/img/avatar/${entry.avatarFile}`,
}))

const resolveAvatarByIndex = (index: number): AvatarItem | undefined => {
  if (avatarItems.length === 0) {
    return undefined
  }

  return avatarItems[index % avatarItems.length]
}

export const useAvatars = () => {
  const getAvatarList = (length?: number): AvatarItem[] => {
    if (length == null) {
      return [...avatarItems]
    }

    if (!Number.isFinite(length) || length <= 0) {
      return []
    }

    const targetLength = Math.floor(length)

    return Array.from({ length: targetLength }, (_, index) => {
      const avatar = resolveAvatarByIndex(index)

      if (!avatar) {
        throw new Error('Avatar manifest is empty')
      }

      return avatar
    })
  }

  const getAvatarByIndex = (index: number): AvatarItem | undefined => {
    if (!Number.isInteger(index) || index < 0) {
      return undefined
    }

    return resolveAvatarByIndex(index)
  }

  return {
    getAvatarList,
    getAvatarByIndex,
  }
}