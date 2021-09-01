# Promises

-what is a promise?
A promise in programming is a request that will be fulfilled or denied. If it is fulfilled, the data comes at a later time.

-Async Behavior
A delay in data when a certain action is called. A function that fires and continues to go through the rest of the code, but then later on, it finishes.

# Fetch
'fetch()' that is used for async behavior
'fetch returns a promise'

-Syntax

'''
const jonSnowData = fetch("https://anapioficeandfire.com/api/characters/583")
.then(response => response.json())
.then(data => data)
'''

'ES6 Style of fetching, of handling async behavior'
'Async/Await'

'''
async function getJonSnowData() {
    const jonSnowData = await fetch("https://anapioficeandfire.com/api/characters/583")
    const json = await jonSnowData.json()
    return jonSnowData
}
'''

# HTTP Request Methods

-GET "Asking for data to come to you"
-POST "Sending data somewhere, typically a database"
-PUT "Used to modify existing data"
-DELETE "Delete data"