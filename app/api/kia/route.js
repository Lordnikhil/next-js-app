

const DUMMY_DATA = ['Seltos', 'Carens', 'Sonet']

export async function GET() {
  const res = await fetch('https://api-kia.com/models', {
    headers: {
      'X-API-Key': process.env.KIA_KEY,
      'X-API-Version': '1'
    }
  }).catch(() => null)

  // const data = await res.json()
  return Response.json(DUMMY_DATA)
}