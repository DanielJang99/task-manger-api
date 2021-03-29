# Task Manager API

A task manager API which allows users to sign up, log in, create/read/update/delete tasks and user information, and upload a profile image. This is a RESTful service built with Express, MongoDb, and Mongoose, and [deployed on heroku](https://hsj-task-manager.herokuapp.com/). Frontend development for this api is currently ongoing.

## Response Codes

```
200: Success
201: Created
400: Bad request
401: Unauthorized
500: Server Error
```

## Request and Response Samples

### POST /users

Request Body:

```
{
    "name":"HyunSeok Jang",
    "email": "hsdanjang@gmail.com",
    "password": "thisismyps123",
    "age": "23"
}
```

Response Body:

Status code 201

```
{
    "user": {
        "age": 23,
        "_id": "6060cfa3b73b460015aaf2b9",
        "name": "HyunSeok Jang",
        "email": "hsdanjang@gmail.com",
        "createdAt": "2021-03-28T18:49:07.163Z",
        "updatedAt": "2021-03-28T18:49:07.239Z",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYwY2ZhM2I3M2I0NjAwMTVhYWYyYjkiLCJpYXQiOjE2MTY5NTczNDd9.hjaL0SsW4PobpCmxqqVqQH0KNIle4apN5_0iFzN3ZAc"
}
```

### POST /users/login

Request Body:

```
{
    "email": "hsdanjang@gmail.com",
    "password": "thisismyps123",
}
```

Response Body:

Status code 200

```
{
    "user": {
        "age": 23,
        "_id": "6060cfa3b73b460015aaf2b9",
        "name": "HyunSeok Jang",
        "email": "hsdanjang@gmail.com",
        "createdAt": "2021-03-28T18:49:07.163Z",
        "updatedAt": "2021-03-29T14:27:41.948Z",
        "__v": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYwY2ZhM2I3M2I0NjAwMTVhYWYyYjkiLCJpYXQiOjE2MTcwMjgwNjF9.KpfmGggQAIzYzmJ7UWPnexmMQSZ4JpfR_UForwzXwwU"
}
```

### POST /tasks

Request Body:

```
{
    "description": "store in production db",
}
```

Response Body:

Status code 201

```
{
    "completed": false,
    "_id": "6061dc7835a28e0015cc55a1",
    "description": "store in production db",
    "owner": "6060cfa3b73b460015aaf2b9",
    "createdAt": "2021-03-29T13:56:08.061Z",
    "updatedAt": "2021-03-29T13:56:08.061Z",
    "__v": 1
}
```

### GET /users/me

Response Body:

Status code 200

```

{
    "age": 23,
    "_id": "6060cfa3b73b460015aaf2b9",
    "name": "HyunSeok Jang",
    "email": "hsdanjang@gmail.com",
    "createdAt": "2021-03-28T18:49:07.163Z",
    "updatedAt": "2021-03-29T14:27:41.948Z",
    "__v": 2
}
```

### GET /tasks/[id]

Response Body:

Status code 200

```
{
    "completed": false,
    "_id": "6061dc7835a28e0015cc55a1",
    "description": "store in production db 2",
    "owner": "6060cfa3b73b460015aaf2b9",
    "createdAt": "2021-03-29T13:56:08.061Z",
    "updatedAt": "2021-03-29T13:56:08.061Z",
    "__v": 0
}
```

### PATCH /users/me

Request Body:

```
{
    "age" : "30"
}
```

Response Body:

Status code 200

```
{
    "age": 30,
    "_id": "6060cfa3b73b460015aaf2b9",
    "name": "HyunSeok Jang",
    "email": "hsdanjang@gmail.com",
    "createdAt": "2021-03-28T18:49:07.163Z",
    "updatedAt": "2021-03-29T14:42:23.723Z",
    "__v": 4
}
```

### PATCH /tasks/[id]

Request Body:

```
{
    "completed": true
}
```

Response Body:

Status code 200

```
{
    "completed": true,
    "_id": "6060d069b73b460015aaf2bb",
    "description": "store in production db",
    "owner": "6060cfa3b73b460015aaf2b9",
    "createdAt": "2021-03-28T18:52:25.827Z",
    "updatedAt": "2021-03-29T14:43:50.414Z",
    "__v": 0
}
```

### POST /users/me/avatar

Request Body:

```
# in form-data

{
    avatar: myPic.jpg
}
```

### DELETE /tasks/[id]

Response Body:

Status code 200

```
{

    "completed": true,
    "_id": "6060d069b73b460015aaf2bb",
    "description": "store in production db",
    "owner": "6060cfa3b73b460015aaf2b9",
    "createdAt": "2021-03-28T18:52:25.827Z",
    "updatedAt": "2021-03-29T14:43:50.414Z",
    "__v": 0

}
```

### DELETE /users/me

Response Body:

Status code 200

```
{
    "completed": true,
    "_id": "6060d069b73b460015aaf2bb",
    "description": "store in production db",
    "owner": "6060cfa3b73b460015aaf2b9",
    "createdAt": "2021-03-28T18:52:25.827Z",
    "updatedAt": "2021-03-29T14:51:31.920Z",
    "__v": 0
}
```

### Error Handling - Login failed or user attemps to modify data before logging in

Response Body:

Status Code 401

```
{
    error: Please authenticate!
}
```
