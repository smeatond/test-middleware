const port = process.env.PORT || 5001;
const app = require("./app");
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
