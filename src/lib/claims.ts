import claimsData from '@/content/claims.json'

export interface Claim {
  id: string
  claim: string
  context: string
  source: string
  safe: boolean
}

export function getAllClaims(): Claim[] {
  return claimsData.claims
}

export function getSafeClaims(): Claim[] {
  return claimsData.claims.filter((claim) => claim.safe)
}

export function getClaimById(id: string): Claim | undefined {
  return claimsData.claims.find((claim) => claim.id === id)
}
