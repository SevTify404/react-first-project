export const extractUserInitials = (username: string): string => {
    const parts = username.split(' ').map(value => value[0]?.toUpperCase())
    return parts.join('')
}