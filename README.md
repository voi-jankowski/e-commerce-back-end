# E-commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The project creates a comprehensive back-end for an e-commerce website. It was built with Node.js, Express.js, Sequelize and MYSQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Links](#links)

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/voi-jankowski/e-commerce-back-end.git
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Rrename the `.env_EXAMPLE` file to `.env` and update the `DB_USER` and `DB_PASSWORD` variables with your own MySQL username and password, respectively.

4. Create the database using the `schema.sql` file located in the `db` folder.

5. Seed the database with sample data with the command

   ```sh
   npm run seed
   ```

6. Initiate the server

   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Once the server is running, you can use an API testing tool such as Insomnia or Postman to interact with the API endpoints. The available endpoints are:

- `/api/products`: GET, POST, PUT, DELETE
- `/api/categories`: GET, POST, PUT, DELETE
- `/api/tags`: GET, POST, PUT, DELETE

For example, to get all products, send a GET request to `/api/products`.

![Getting all products.](./assets/e-commerce-1.png)

To add a new product, send a POST request to `/api/products` with the product data in the request body.

![Adding a new product.](./assets/e-commerce-2.png)

To update a product, send PUT request to `/api/products/` followed by the id of the desired product and in the request body the keys with new updated values.

![Updating a product.](./assets/e-commerce-3.png)

To delete a product send DEL request to `/api/products/` followed by the id of the undesired product.

![Updating a product.](./assets/e-commerce-4.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the [MIT License](https://opensource.org/licenses/MIT). See LICENSE.txt for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add Your Feature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions

If you have any questions about the project please contact me through [my Github](https://github.com/voi-jankowski) or email me at [voi.jankowski@gmail.com](mailto:voi.jankowski@gmail.com).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## LInks

The location of the project [on GitHub](https://github.com/voi-jankowski/e-commerce-back-end).

The walkthrough video can be accessed on [here](https://drive.google.com/file/d/1kvIoDzqoPxlxQgBIaNBmxJ0PLiFMlkSh/view).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
