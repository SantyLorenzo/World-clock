export async function getAllTimezones() {
  const timezones = await fetch('https://worldtimeapi.org/api/timezone')
  return await timezones.json()
}

export async function getTimezone(path) {
  const timezones = await fetch(`https://worldtimeapi.org/api/timezone/${path}`)
  return await timezones.json()
}
