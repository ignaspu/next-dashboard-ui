import { Data } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Not Allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
    const resp = await fetch(`https://api.jsonbin.io/v3/b/${process.env.BIN_KEY}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': process.env.JSONBIN_MASTER_KEY!,
      },
      body: JSON.stringify({ email }),
    });

    if (!resp.ok) {
      return res.status(500).json({ success: false, message: 'Failed to save email' });
    }

    return res.status(200).json({ success: true, message: 'Invitation link sent to email!' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
