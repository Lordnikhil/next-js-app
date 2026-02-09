const DUMMY_DATA = ['Landcruiser', 'Innova', 'Fortuner']

export async function GET() {
  const res = await fetch('https://api-toyota.com/models', {
    headers: {
      'X-API-Key': process.env.TOYOTA_KEY,
      'X-API-Version': '1'
    }
  }).catch(() => null)

  // const data = await res.json()
  return Response.json(DUMMY_DATA)
}