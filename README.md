<h1 align="center">simultaneous-posts</h1>

Application created to study the concepts of ws and wss protocol in the websocket tool. The code was developed using TypeScript, TypeORM, PostgreSQL and socket.io API. 
The front-end was created in html and the script in jQuery. 

base URL: <a> http://localhost:3000</a>

## Routes: 

***GET*** / <br>
Route that returns the visualization of the public view index.html. 
 <br>
 
 **POST** /posts <br>
Route to create a post. Both fields are required.

Request format: 
```json
{
  "username": "name",
  "content": "something new to say...",
}
```
Response:
```json
201 
{
  "username": "name",
  "content": "something new to say...",
  "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
}
```

<br>


***GET*** /posts <br>
Route to list all posts.

Response:
```json
200
[
  {
    "username": "name",
    "content": "something new to say...",
    "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
  }
]
```
<br>
