<!--ts-->
   * [Sobre](#Sobre)
   * [Require](#Require)
   * [Usage](#Usage)
     * [Users](#Users)
     * [Projects](#Projects)
     * [Transactions](#Transactions)
     * [Sessions](#Sessions)
   * [Techs](#Techs)
<!--te-->

# ⚙️ Requirements

- [Git](https://git-scm.com/) installed
- [Node](https://node.js.org/) installed
- [PostegreSQL](https://www.postgresql.org/) installed
- Npm or [Yarn](https://yarnpkg.com/) installed

# 📦 Install dependencies
- Run `npm install` or `yarn install`.

# 🔨 Usage
- Run `npm start` or `yarn start`.
- Base URL: https://localhost:3333


# 👨🏻‍💻 Users
### Features
- [x] List all users
- [X] Create new user
- [X] Update infos users
- [X] Delete user

#### List All Users
- `Path: /users`
- Method: [GET] 

#### Create new User
- `Path: /users`
- Method: [POST] 

Body 
```json
{
    "firstName": "Bruno",
    "lastName": "Sampaio",
    "username": "BrunoDev",
    "avatar": "image",
    "email": "nascimento@gmail.com",
    "birth": "09/04/1996",
    "password": "MyPassword"
}
```

#### Update User
- `Path: /users/user-id`
- Method: [PUT] 

Body 
```json
{
    "firstName": "Bruno",
    "lastName": "Sampaio",
    "username": "BrunoDev",
    "avatar": "image",
    "email": "nascimento@gmail.com"
}
```

#### Delete User
`Path: /users/user-id`
Method: [DELETE]



# 🗄 Projects
### Features
- [x] List all projects
- [X] Create new projects
- [X] Update infos projects
- [X] Delete projects

#### List All Projects
- `Path: /projects`
- Method: [GET] 

#### Create new User
- `Path: /projects`
- Method: [POST] 

Body 
```json
{
  "title":" Projeto de Stone ",
  "description":"Uma breve descrição do projeto",
  "category":"Categoria do projeto",
  "image":"image",
  "valuetion":"100000",
  "address":"Rua ficticia n 2",
  "goal":"90000",
  "balance":"0",
  "date_limit":"7/01/2021",
  "account":"w6454t-948e4-0498-8474",
  "user_id":"1" //Owner project
}
```

#### Update Project
- `Path: /project/project-id`
- Method: [PUT] 

Body 
```json
{
  "title":" Projeto de Stone ",
  "description":"Uma breve descrição do projeto",
  "category":"Categoria do projeto",
  "image":"image",
  "valuetion":"100000",
  "address":"Rua ficticia n 2",
  "goal":"90000"
}
```

#### Delete Project
`Path: /project/project-id`
Method: [DELETE]




# 💰 Transactions
### Features
- [x] List all Transactions
- [X] Create new Transaction

#### List All Transactions
- `Path: /transacions`
- Method: [GET] 

#### Create new Transaction
- `Path: /transacions`
- Method: [POST] 

Body 
```json
{
  "value":"21900",
  "date":"9/04/2021",
  "sender":"1", // id user sender
  "receptor":"3" // id project receptor
}
```