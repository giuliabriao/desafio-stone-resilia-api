## Invest em Mim.


![logo](https://user-images.githubusercontent.com/51389902/119927784-84b9f380-bf50-11eb-894c-d024688bed2a.png)



INVEST EM MIM is an investment platform whose mission is to stimulate the financial independence of the investor and encourage the realization of grandiose projects.
Fintech INVEST EM MIM innovates the investment market, bringing to Brazil the possibility of fractional investments. Unlike other platforms, at INVEST EM MIM the buyer can invest the amount he wants, not being limited to the value of the quota.
We treat each project as an investment, with financial or welfare returns. We have five types of investment: startups, local, social and environmental commerce.
We also innovate with the investment possibilities, in INVEST EM MIM it is possible to invest with currency, cashback, miles and cryptocurrencies, giving a greater possibility of success for the platform.
 


# Minimum requirements 🔐

 - Register new users.
 - Authenticate new users.
 - Check if users are registered in the user table.
 - If so, return ok and store in the browser the information that signals that the user is logged in (cookies or localStorage).
 - If not, warn the user that the information is not correct.
 - Register, edit, delete new projects.
 - View projects registered by a user.
 - List all registered projects on a homepage.
 - Detail a project and enable contribution.

 # Technology ⚒📚 

 - [Express](https://expressjs.com/pt-br/)
 - [Knex](http://knexjs.org/) 
 - [Bcrypt](https://www.npmjs.com/package/bcrypt)
 - [JWT](https://jwt.io/)
 - [NodeJs](https://nodejs.org/en/)


# Requirements ⚙️

- [Git](https://git-scm.com/) installed
- [Node](https://node.js.org/) installed
- [PostegreSQL](https://www.postgresql.org/) installed
- Npm or [Yarn](https://yarnpkg.com/) installed

# Install dependencies 📦 
- Run `npm install` or `yarn install`.

# Usage 🔨
- Run `npm start` or `yarn start`.
- Base URL: https://localhost:3333

# Users 👨🏻‍💻 
### Features
- [x] List all users
- [X] Create new user
- [X] Update infos users
- [X] Delete user

#### List All Users :
- `Path: /users`
- Method: [GET] 

#### Create new User :
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

#### Update User :
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

#### Delete User :
`Path: /users/user-id`
Method: [DELETE]



# Projects 🗄 
### Features
- [x] List all projects
- [X] Create new projects
- [X] Update infos projects
- [X] Delete projects

#### List All Projects :
- `Path: /projects`
- Method: [GET] 

#### Create new User :
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

#### Update Project :
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

#### Delete Project :
`Path: /project/project-id`
Method: [DELETE]




# Transactions 💰
### Features
- [x] List all Transactions
- [X] Create new Transaction

#### List All Transactions :
- `Path: /transacions`
- Method: [GET] 

#### Create new Transaction :
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


# Authors 📚 

- [Bruno Sampaio](https://github.com/BrunoSampaioDev)
- [Giulia Brião](https://github.com/giuliabriao)
- [Adriano Oscar](https://github.com/Adrianooscar)
- [Carlos Trajano](https://github.com/CarllosT)
