const db = require('./server/db/models');
const app = require('./server');

const port = process.env.PORT || 3000;

db.sync().then(() =>
  app.listen(port, () => {
    console.log(`Your server, listening on port ${port}`);
  })
);
