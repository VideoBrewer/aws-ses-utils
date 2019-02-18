const fs = require('fs')

fs.writeFileSync(`email-${Date.now()}.json`, JSON.stringify({
  Source: '',
  Template: '',
  Destination: {
    ToAddresses: []
  },
  TemplateData: '{}'
}, ' ', 2))
