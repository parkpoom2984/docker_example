const loopback = require('loopback')
const router = loopback.Router()

router.get('/test',
  function (req, res) {
    console.log(`/test_example_sit`)
    res.status(200).json({'message': 'test_example_sit'})
  }
)

module.exports = router
