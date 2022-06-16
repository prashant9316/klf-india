const router = require('express').Router();


router.get('/about-us', async(req, res)=>{
    return res.render('aboutus')
})

router.get('/our-team', async(req, res) =>{
    return res.render('our-team')
})

router.get('/services', async(req, res) => {
    return res.render('services')
})

router.get('/our-partners', async(req, res) => {
    return res.render('our-partners')
})

router.get('/resources', async(req, res) => {
    return res.render('resources')
})

router.get('/contact', async(req, res) => {
    return res.render('contact')
})

router.get('/contact-us', async(req, res) => {
    return res.render('contactus')
})


module.exports = router;