const KEY_PREFIX = 'mrb-'

export const set = (key: string, value: any) => {
  sessionStorage.setItem(`${KEY_PREFIX}${key}`, JSON.stringify(value))
}

export const get = (key: string) => {
  const value = sessionStorage.getItem(`${KEY_PREFIX}${key}`)
  if (value) return JSON.parse(value)
  if (!value) return null
}

export const remove = (key: string) => {
  sessionStorage.removeItem(`${KEY_PREFIX}${key}`)
}

export default {
  set,
  get,
  remove,
}
