export function diffSeconds (date1: Date, date2: Date): number {
  const diff = date2.getTime() - date1.getTime()
  return Math.round(diff / 1000)
}

export function diffMinutes (date1: Date, date2: Date): number {
  return Math.round(diffSeconds(date1, date2) / 60)
}
