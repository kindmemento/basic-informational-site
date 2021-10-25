const express = require('express');
const router = express.Router()

router.get('/contact-me', (req, res) => {
	res.render('contact', {
		title: 'Contact Me'})
})

module.exports = router;