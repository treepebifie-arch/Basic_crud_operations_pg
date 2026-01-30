import app from './app.js';
const port = process.env.PORT || 4600;

app.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});

