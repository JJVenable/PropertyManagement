const db = require('../db')
const Property = require('../models/property')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const properties = [
    {location: '1600 Pennsylvania Ave NW, Washington, DC', owner: 'The USA govt', currentTenant: 'POTUS', comments:'Recheck with tenant in 4 year increments'}
  ]
  
  await Property.instertMany(properties)
  console.log("Also made some Properties to manage!")

}
const run = async () => {
    await main()
    db.close()
}

run()











const properties = [
  {location: '', owner: '', issueToAddress: '', currentTenant: '', comments:''}
]

await Property.instertMany(properties)
console.log("Also made some Properties to manage!")