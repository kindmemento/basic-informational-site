const express = require('express');
const app = express()
const expressEjsLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')
const contactRouter = require('./routes/contact')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layout')
app.use(expressEjsLayouts)

app.get('/', indexRouter)
app.get('/about', aboutRouter)
app.get('/contact-me', contactRouter)
app.get('*', (req, res) => {
	res.status(404).render('404', {title: '404 Not Found'})
})

app.listen(process.env.PORT || 3000)