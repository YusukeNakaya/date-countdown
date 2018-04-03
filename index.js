export default function dateCountdown(year, month, date) {
  let result
  const dateObj = new Date()
  const todayYear = dateObj.getFullYear()
  const todayMonth = dateObj.getMonth()
  const todayDate = dateObj.getDate()
  const eventUTC = Date.UTC(year, month - 1, date)
  const todayUTC = Date.UTC(todayYear, todayMonth, todayDate)
  const eventDay = (eventUTC - todayUTC) / 1000 / 60 / 60 / 24
  if (eventDay < 0) result = 0
  else result = eventDay
  return result
}
