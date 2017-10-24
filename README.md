## Nodejs in 10 minutes

clone the project

### Installations
* npm install

### Run
* npm run start

### GET/POST/PUT From database
* GET: localhost:3000/tasks
    Returns JSON object
    Example:
        {
            "_id": "59ef6ef8fcf16736dc144c12",
            "name": "Test Task",
            "__v": 0,
            "status": [
                "completed"
            ],
            "Created_date": "2017-10-24T16:48:56.855Z"
        }

* POST: localhost:3000/tasks
    Post with JSON object
        Required: Name
        Optinal: status, Created_date

* PUT: localhost:3000/tasks:id
    Post whit JSON object containing the parameters you want to change
