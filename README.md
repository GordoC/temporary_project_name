# BC hiking blogger Web App

**Objective: **
This app offers a web platform that helps the hiking enthusiasts from Canada or BC to select the best hiking trails based on their preferences and document their experiences in the form of blogs or journals.

# Core features:


we plan to implement two functions for assisting our users. 

1. Trail Guide:
   This feature will act as guide, helping users identify trails that aligh with their interests and physical capability
   ## Fucntionalities:
   Users can search for trails based on parameters like locations, elevation, length, average time spent, difficulty, and hiker rating
   Provides detailed trail information upon selection
   Display a list of nearby trails based on user's current location or specificed location

The second function, users are able to create an account in the system and create hiking blogs or journals for the trails they visited. 

2. Hiking Blog & Journal:
   This feature allows users to document their hiking experiences,
   ## functionalities:
   Users can create an account in the platform.
   Users can write and manage blogs or journals using their account



# Technical Implementation:

MERN Stacks

## Front-end :
TypeScript and React will be used to design and implement a user-friendly and responsive client-side webpage.
 

## Back-end :
Node.js with Express.js will be used to handle incoming HTTP requests from the front-end, provide CRUD operation for trails, user accounts and blogs, implement user authentication and authorization, and ensure error handling and data validation.


## Database :
MongoDB (Mongoose ORM for structured data handling) will be used to store trail data, user account details, and blogs 

trails {
  location, elevation, length, averageTimeSpent, difficulty, hikerRating, etc.
}

user {
  username, passwordHash, email, user-created blogs
}

blog {
  title, content, image, date, comment
}

## API Endpoints:
 '/api/trails': retrieve, add, edit and delete trail data
 '/api/users': user registration, login, profile management 
 '/api/blogs': create, read, edit, delete blogs/journals

 




TypeScript and React will be uesd in this project to implement the client side web page. The PostgreSQL will be use for data storage. 

