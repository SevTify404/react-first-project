export const extractUserInitials = (username: string | undefined): string => {
    if (!username) return 'XX';
    const parts = username.split(' ').map(value => value[0]?.toUpperCase())
    return parts.join('')
}