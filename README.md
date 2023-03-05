# E-commerce Back End

## Description

This is a functional Express.js API that uses Sequelize to connect to a MySQL database. With this API, you can perform CRUD operations for categories, products, and tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To use this application, you will need to clone the repository to your local machine. You will also need to create an environment variable file with your database name, MySQL username, and MySQL password. Once you have done that, you can run the following command to install the necessary dependencies:

```
npm install
```


## Usage

To create a development database and seed it with test data, run the following commands:

```
mysql -u root -p
```

This will open the MySQL shell. Enter your password when prompted. Then, run the following commands in the MySQL shell:

```
source db/schema.sql
```

```
exit
```

```
npm run seed
```

Once you have set up your database, you can start the server with the following command:

```
npm start
```


Now that your server is running, you can test the API routes in Insomnia. The following routes are available:

- GET /api/categories: Returns all categories with associated product data.
- GET /api/categories/:id: Returns a single category with associated product data.
- POST /api/categories: Creates a new category.
- PUT /api/categories/:id: Updates an existing category.
- DELETE /api/categories/:id: Deletes a category and returns the deleted category.

- GET /api/products: Returns all products with associated category and tag data.
- GET /api/products/:id: Returns a single product with associated category and tag data.
- POST /api/products: Creates a new product.
- PUT /api/products/:id: Updates an existing product.
- DELETE /api/products/:id: Deletes a product and returns the deleted product.

- GET /api/tags: Returns all tags with associated product data.
- GET /api/tags/:id: Returns a single tag with associated product data.
- POST /api/tags: Creates a new tag.
- PUT /api/tags/:id: Updates an existing tag.
- DELETE /api/tags/:id: Deletes a tag and returns the deleted tag.

## License

This application is licensed under the MIT license.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

## Tests

There are no tests for this application at this time.

## Questions

If you have any questions about this application, please contact me by email or through my GitHub profile. 

Email: jshigoodies@gmail.com

GitHub: https://github.com/Jshigoodies
