import http from "http";
import app from "./app.js ";
const server = http.createServer(app);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
