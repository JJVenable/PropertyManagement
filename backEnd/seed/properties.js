const db = require('../db')
const Property = require('../models/property')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const properties = [
    {location: '1600 Pennsylvania Ave NW, Washington, DC', owner: 'The USA govt', currentTenant: 'POTUS', comments:'Recheck with tenant in 4 year increments'},
    {location: '1 Bass Pro Drive, Memphis, TN', owner:'BassPro', currentTenant: 'BassPro', comments: '' },
    {location: '333 Commerce Street; Nashville, Tennessee,', owner:'AT&T', currentTenant: 'AT&T', comments: 'Batman may also live here' },
    {location: '2500 West End Ave, Nashville, TN', owner:'State of TN', currentTenant: 'Athena Parthenos and friends', comments: '' },
    {location: '10 Bluff View, Chattanooga, TN', owner:'Chattanooga Art Association', currentTenant: 'Art Museum', comments: 'all 3 buildings, not just the old one' },
    // {location: '', owner:'', currentTenant: '', comments: '' }
  ]
  
  await Property.insertMany(properties)
  console.log("Also made some Properties to manage!")

}
const run = async () => {
    await main()
    db.close()
}

run()
