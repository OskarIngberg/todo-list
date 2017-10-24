## Nodejs in 10 minutes

clone the project

### Installations
* npm install

### Run
* npm run start

### GET/POST/PUT From database
* GET: localhost:3000/tasks<br />
    Returns JSON object<br />
    Example:
```
        {
            "_id": "59ef6ef8fcf16736dc144c12",
            "name": "Test Task",
            "__v": 0,
            "status": [
                "completed"
            ],
            "Created_date": "2017-10-24T16:48:56.855Z"
        }
```   

* POST: localhost:3000/tasks<br />
    Post with JSON object<br />
        Required: Name<br />
        Optinal: status, Created_date<br />

* PUT: localhost:3000/tasks:id<br />
    Post whit JSON object containing the parameters you want to change<br />
