const loopback = require('loopback')
const router = loopback.Router()

router.get('/test_example',
  function (req, res) {
    res.status(200).json({'user_id': 'test_example'})
  }
)

module.exports = router
