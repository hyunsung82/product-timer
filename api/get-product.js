
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./product.json');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: '상품 정보 없음' });
  }

  const data = fs.readFileSync(filePath, 'utf-8');
  res.status(200).json(JSON.parse(data));
}
