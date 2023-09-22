export function uid () {
  return Date.now().toString() + Math.random().toString()
}
