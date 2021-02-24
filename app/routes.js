const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching-remove attributes page
router.post('/setup/attributes/remove-attributes', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const removeAttribute = req.session.data['remove-attribute']

  if (removeAttribute === 'no') {
    res.redirect('agent-attributes')
  } else {
    res.redirect('agent-attributes-removed')
  }
})

// Branching-remove agents page
router.post('/setup/agents/remove-agent', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const removeAgent = req.session.data['remove-agent']

  if (removeAgent === 'no') {
    res.redirect('agents-list')
  } else {
    res.redirect('agents-list-removed')
  }
})

// Branching-remove agents page
router.post('/setup/task-information/remove-task', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const removeAgent = req.session.data['remove-task']

  if (removeAgent === 'no') {
    res.redirect('task-info-list')
  } else {
    res.redirect('task-info-list-removed')
  }
})




module.exports = router
