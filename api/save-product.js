
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const data = req.body;

  const filePath = path.resolve('./product.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).json({ message: '상품 저장 완료!' });
}
