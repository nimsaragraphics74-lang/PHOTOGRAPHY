export function ownerMatches(user, ownerEmail) {
  return Boolean(user && typeof user.email === 'string' && typeof ownerEmail === 'string' && ownerEmail.length > 0 && user.email.toLowerCase() === ownerEmail.toLowerCase());
}
