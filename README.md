<div align="center">
    <img src="https://user-images.githubusercontent.com/51389902/119927784-84b9f380-bf50-11eb-894c-d024688bed2a.png" width="520" />    
</div>
<hr /> 
<div align="center" width="320">
    <p>INVEST EM MIM is an investment platform whose mission is to stimulate the financial independence of the investor and encourage the realization of grandiose projects.
Fintech INVEST EM MIM innovates the investment market, bringing to Brazil the possibility of fractional investments. Unlike other platforms, at INVEST EM MIM the buyer can invest the amount he wants, not being limited to the value of the quota.
We treat each project as an investment, with financial or welfare returns. We have five types of investment: startups, local, social and environmental commerce.
We also innovate with the investment possibilities, in INVEST EM MIM it is possible to invest with currency, cashback, miles and cryptocurrencies, giving a greater possibility of success for the platform.</p>   
</div>






 # Technology ⚒📚 

 - [Express](https://expressjs.com/pt-br/)
 - [Knex](http://knexjs.org/) 
 - [Bcrypt](https://www.npmjs.com/package/bcrypt)
 - [JWT](https://jwt.io/)
 - [NodeJs](https://nodejs.org/en/)
 - [FireStore](https://firebase.google.com/products/firestore)


# Requirements ⚙️

- [Git](https://git-scm.com/) installed
- [Node](https://node.js.org/) installed
- [PostegreSQL 13](https://www.postgresql.org/) installed
- Npm or [Yarn](https://yarnpkg.com/) installed

# Install dependencies 📦 
- Run `npm install` or `yarn install`.

# Usage 🔨
- Run Migrations `npx migrate:latest`
- Run `npm start` or `yarn start`.
- Base URL: https://localhost:3333

# Users 👨🏻‍💻 
### Features
- [x] List all users
- [x] Filter users
- [X] Create new user
- [X] Update infos users
- [X] Update avatar user
- [X] Delete user

#### List All Users :
- `Path: /users`
- Method: [GET] 

#### Filter user by username :
- `Path: /users/me?username=YOUR-USERNAME`
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

#### Update Avatar :
- `Path: /users/avatar/user-id`
- Method: [PATCH] 

Body: 
```type:  multpart Form```

#### Delete User :
`Path: /users/user-id`
Method: [DELETE]



# Projects 🗄 
### Features
- [X] List all projects
- [X] Create new projects
- [X] Update infos projects
- [X] Delete projects
- [X] Filters projects
- [X] Pagination projects


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

### Filters Projects :

##### Filter project by user id
- `Path: /projects?user_id=ID-USER`
- Method: [GET] 

##### Filter project by category
- `Path: /projects?category=PROJECT-CATEGORY`
- Method: [GET] 

##### Filter project by id
- `Path: /projects?id=PROJECT-ID`
- Method: [GET] 

##### Pagination projects
- `Path: /projects?page=PAGE-NUMBER`
- Method: [GET] 



# Transactions 💰
### Features
- [x] List all Transactions
- [X] Create new Transaction
- [X] Filters Transactions

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
### Filters Transactions :

##### Filter transaction by user sender
- `Path: /transactions?sender=ID-USER-SENDER`
- Method: [GET] 

##### Filter transaction by project receptor
- `Path: /transactions?receptor=ID-PROJECT-RECEPTOR`
- Method: [GET] 

# Sessions 
### Features
- [X] Create new Session

#### Create new Session :
- `Path: /sessions`
- Method: [POST] 

Body 
```json
{
  "email":"email@email.com",
  "password":"mypassword"
}
```


# Authors 📚 

- [Bruno Sampaio](https://github.com/BrunoSampaioDev)
- [Giulia Brião](https://github.com/giuliabriao)
- [Adriano Oscar](https://github.com/Adrianooscar)
- [Carlos Trajano](https://github.com/CarllosT)
