const loopback = require('loopback')
const router = loopback.Router()

router.get('/test_example',
  function (req, res) {
    console.log(`/test_example`)
    res.status(200).json({'user_id': 'test'})
  }
)

module.exports = router
