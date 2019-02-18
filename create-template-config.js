const fs = require('fs')

// TODO: Switch to flags
if (process.argv.length < 5) {
  console.log('Missing args. Template name, Subject, HTML filename')
  process.exit(1)
}

fs.writeFileSync(`config-${Date.now()}.json`, JSON.stringify({
  Template: {
    TemplateName: process.argv[2],
    SubjectPart: process.argv[3],
    HtmlPart: fs.readFileSync(process.argv[4], 'utf8')
  }
}, ' ', 2))
