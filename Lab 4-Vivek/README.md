# Animal Management System

A professional web application for managing animal records in zoological facilities, wildlife sanctuaries, and animal care centers.

## Features

- 🦁 Comprehensive animal record management
- 📝 Detailed information tracking (species, age, description)
- 🎨 Modern, responsive user interface
- 🔍 Efficient data retrieval and management
- 🛡️ Error handling and data validation

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Template Engine**: EJS
- **Frontend**: Bootstrap 5 with custom CSS
- **Documentation**: JSDoc

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory:
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/animal_db
```

4. Start the application:
```bash
npm start
```

## Project Structure

```
Lab4_YourName/
├── controllers/          # Business logic
├── models/              # Database schemas
├── public/              # Static assets
├── routes/              # URL routing
├── views/               # EJS templates
├── .env                 # Environment variables
├── app.js              # Application entry point
└── package.json        # Project dependencies
```

## API Documentation

### Animal Routes

- `GET /animals` - Display all animals
- `GET /animals/new` - Show animal entry form
- `POST /animals` - Create new animal
- `GET /animals/:id/edit` - Show edit form
- `PUT /animals/:id` - Update animal
- `DELETE /animals/:id` - Delete animal

## Academic Citations

1. Fielding, R. T. (2000). "Architectural Styles and the Design of Network-based Software Architectures." Doctoral dissertation, University of California, Irvine.

2. MongoDB, Inc. (2023). "MongoDB Documentation." Retrieved from https://docs.mongodb.com/manual/

3. Express.js (2023). "Express.js Security Best Practices." Retrieved from https://expressjs.com/en/advanced/best-practice-security.html

## Design Principles

The application follows these key design principles:

- **MVC Architecture**: Separation of concerns between Model, View, and Controller
- **RESTful API Design**: Following REST principles for API endpoints
- **Responsive Design**: Mobile-first approach using Bootstrap and custom CSS
- **Error Handling**: Comprehensive error management and user feedback
- **Documentation**: Detailed inline documentation and API references

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- MongoDB Documentation Team
- Express.js Community
- Bootstrap Team
- Node.js Community

---
*This project was developed as part of an academic assignment with a focus on originality and professional software development practices.* 