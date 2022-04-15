
# Flat&Flatmates

Flat&FlatMates web application enables the users to find PG/Flats/Rooms as per their requirements and allows the
owners to add their property details for finding tenants/flatmates/roommates. Technologies used are React JS along
with CSS and Bootstrap for better user interface in front-end and J2EE in backend along with MySQL as database.


## Installation

Follow the instructions to run the project

1) Create a folder and unzip the front-end part. In any editor (I prefer VS Code) , open terminal and run following command
```bash
  npm install 
```
front-end React project with all the dependencies will get downloaded. The list of all the dependencies are as follows: 

```bash
1) axios
2) bootstrap
3) formik
4) moment
5) react-router-dom5.2
6) styled-components
7) @mui/material @emotion/react @emotion/styled
8) @mui/icons-material
9) @mui-treasury/styles
10) react bootstrap
11) react-table 
```
2) To run the project on browser, in the project directory, you can run:
  
```bash
  npm start 
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

3) For backend part, unzip the file and open the project in IDE(sts preferred). You can import it as an existing project.
While importing as an existing project, make sure you change the connection settings in application.properties of spring boot app & update it.
Runs the application on server side
Open [http://localhost:8080](http://localhost:8080) 

## Features

- Signin/signup with user authentication. 
- List down all the available flats/PGs for rent.
- 

## Tech Stack

**Client:** React with Bootstrap

**Server:** Spring Boot Application


## API Reference

#### Get all items

```http
  GET /flat/search
```

| Parameter  |  Type     | Description                |
| :--------  | :-------  | :------------------------- |
| `areacode` | `string`  | **Required**. To fetch list of flats with areacode |

#### addProperty(flatdetails)

Adds the property details in the database. 


## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Authors

- [@PankajInamdar](https://github.com/mrpankajinamdar)- [@PurnimaPanday](https://github.com/ray-21)
- [@PankajSahu](https://github.com/Pankajsahu713)- [@NeelimaBodkhe](https://github.com/Neelima1804)
- [@OnkarYogi](https://github.com/yonkar)- [@NehaTadas](https://github.com/NehaT13)
