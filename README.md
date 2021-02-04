# React Task Tracker

Uses [react-icons](https://react-icons.github.io/react-icons/icons?name=fa)

Uses [JSON Server](https://www.npmjs.com/package/json-server) as a mock backend/REST API, to make requests to and fetch data from. It is run using the `server` script in package.json. Executing this script automatically creates db.json if it doesn't exist. App data was moved to this file and converted to JSON format. Using the useEffect hook to load them on page loads.
