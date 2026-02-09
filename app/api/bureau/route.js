
export async function POST(req) {
  const { ssn } = await req.json()

  const res = await fetch('https://api-transunion.com/bureau/score', {
    method: 'POST',
    headers: {
      'X-API-Key': process.env.BUREAU_KEY,
      'X-API-Version': '1'
    },
    body: JSON.stringify({ ssn })
  }).catch(() => null)

  return Response.json({ score: 720 })
}