### ROUTES PROJECTS
- [x] Method GET
- [X] Method POST
- [X] Method PUT
- [X] Method DELETE




###### Base URL: https://localhost:3000

## List All Projects
`Path: /projects`
Method: [GET] 

____

## Create new Project
`Path: /projects`
Method: [POST] 

Body
```
{
  "title":"Ajude o Bruno a comprar um Macbug",
  "description":"Preciso de uma macbug pra trabalhar",
  "category":"startup",
  "image":"",
  "valuetion":"100000",
  "address":"",
  "goal":"32000",
  "balance":"0",
  "date_limit":"07/02/1998",
  "account":"werwe5rwrw",
  "user_id":"9"
}
```

___

## Update Project
`Path: /projects/user-id`
Method: [PUT] 

Body
```
{
  "title":"Ajude o Bruno a comprar um Macbug",
  "description":"Preciso de uma macbug pra trabalhar",
  "category":"startup",
  "image":"",
  "valuetion":"100000",
  "address":"",
  "goal":"32000",
  "balance":"0",
  "date_limit":"07/02/1998",
  "account":"werwe5rwrw",
}
```
___

## Delete Project
`Path: /projects/user-id`
Method: [DELETE] 