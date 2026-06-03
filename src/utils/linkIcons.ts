export function getFaviconUrl(href: string) {
  try {
    const hostname = new URL(href).hostname
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
  } catch {
    return null
  }
}

export function isGitHubUrl(href: string) {
  try {
    return new URL(href).hostname.includes('github.com')
  } catch {
    return false
  }
}
