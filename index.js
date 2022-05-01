const express = require('express');
const cors = require('cors');
const i18n = require('i18n')
const { PORT } = require('./config');

const app = express();
i18n.configure({
	locales: ['zh', 'en'],
	directory: __dirname + '/locales',
	defaultLocale: 'en'
})

require('./utils/db')();
app.use(cors({ credentials: true, origin: ['http://localhost:3000','http://localhost:3001' ] }));
app.use(express.json())
app.use(i18n.init)

require('./routes')(app);

app.listen(PORT, () => {
  console.log('localhost:8000');
});
