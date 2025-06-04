const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

let productData = null;

app.use(cors());
app.use(express.json());

app.get('/product', (req, res) => {
  if (productData) {
    res.json(productData);
  } else {
    res.status(404).json({ message: '상품이 등록되지 않았습니다.' });
  }
});

app.post('/product', (req, res) => {
  productData = req.body;
  res.json({ message: '상품이 저장되었습니다.', productData });
});

app.listen(PORT, () => {
  console.log(`🚀 API 서버 실행 중: http://localhost:${PORT}`);
});
