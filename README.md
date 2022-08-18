# Ilume Backend Skills Test

## Deployed Link

[https://ilume-test.herokuapp.com/](https://ilume-test.herokuapp.com/)

## Design choices and assumptions

### User Routes

1. There is only a route for signup and login based on the assumption that there would be a JWT sytem inplace, so logout functionality
would be taken care on the front end by deleting the token.
2. signup and login just return the id of the user

### Dog Routes

1. I had all id's received through the body of a request rather than parameters, which can be changed depending on what is preferred from the frontend devs.
2. Most of the dog routes just return all dogs which was done just to be safe. This can be changed to improve efficiency.

### Model Design

The dogs were included as a subdocument to the user. I went with this design choice assuming the dogs list wouldn't get too large and would only really be viewed by the logged in user and not other users. If this were the case I would most likely move the Dogs into their own collection and store references in the Users document.

All passwords are hashed.


```
USER
{
  email: string,
  password: string,
  dogs: [{
    name: string,
    dob: date,
    breed: string
  }]
}
```


## Installation and deployment

To run locally you need to add a .env file to connect to your own MongoDB Atlas database

```
MONGODB=<link to database>
```

Then install dependecies and start
```md
npm install
npm start
```

To run with nodemon

```md
npm run dev
```

## API Routes

### POST /api/users/signup
Signs a user up

```
body : {
  email: string, 
  password: string
}
```

returns id for future requests

### POST /api/users/login
Logs in a user

```
body : {
  email: string, 
  password: string
}
```

returns id for future requests

### GET /api/dogs/all
Gets all dogs belonging to a user. id is the users id.

```
body : {
  id: mongoDB ID string
}
```

returns all dogs

### GET /api/dogs/single
Gets a single dogs belonging to a user. needs both the user id and dog id.
```
body : {
  userId: mongoDB ID string, 
  dogId: mongoDB ID string
}
```

returns single dog

### POST /api/dogs/add
Adds a dog to the users dog list. dob can be a javascript date object or converted to an ISOstring.

```
body: {
	userId: mongoDB ID string,
	name: string,
	dob: date string,
	breed: string
}
```

return all dogs

### PUT /api/dogs/update
Updates an existing dog in users list

```
body: {
	userId: mongoDB ID string,
	name: string,
	dob: date string,
	breed: string
}
```
returns all dogs

### DELETE /api/dogs/delete
Deletes a dog from the 

```
body : {
  userId: mongoDB ID string, 
  dogId: mongoDB ID string
}
```

returns all dogs

## Demo Video


https://user-images.githubusercontent.com/26681440/185389146-1568c685-8d7a-4229-9c71-4d559693c39a.mp4


## Links

[My Github Account](https://github.com/mattyd96)

[My Portfolio](https://mattyd.me)

[Email: matthew.durflinger@gmail.com](mailto:matthew.durflinger@gmail.com)
