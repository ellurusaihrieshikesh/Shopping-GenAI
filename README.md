# Shopping-GenAI

A full-stack shopping application with a React frontend and Node.js/Express backend, using MongoDB for data storage.

## Features

- User registration and login
- Product browsing
- Add to cart functionality
- Order via email (automated with EmailJS)
- Responsive design
- **GenAI/AI Features:**
  - (If applicable) Product recommendations or smart features powered by GenAI (customize this section based on your actual implementation)
  - Automated order emails using EmailJS

## Project Structure

```
pj/
├── backend/      # Node.js/Express backend
└── pj/           # React frontend
```

## Prerequisites

- Node.js and npm
- MongoDB (running locally)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ellurusaihrieshikesh/Shopping-GenAI.git
cd Shopping-GenAI
```

### 2. Start the Backend

```bash
cd pj/backend
npm install
npm start
```
- The backend runs on [http://localhost:5000](http://localhost:5000)

### 3. Start the Frontend

Open a new terminal:

```bash
cd pj/pj
npm install
npm start
```
- The frontend runs on [http://localhost:3000](http://localhost:3000)

### 4. Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Register a new user or log in.
- Browse products, add to cart, and place orders.

## GenAI and Automation

- **Email Automation:** The project uses [EmailJS](https://www.emailjs.com/) to automate order emails directly from the frontend, allowing users to place orders via email without backend email server setup.
- **GenAI Features:** (If you have implemented GenAI-powered product recommendations or chat, describe them here. If not, you can update this section when such features are added.)

## Environment Variables

- The backend expects MongoDB at `mongodb://127.0.0.1:27017/asdfghjkl` (default in code).
- Change this in `backend/index.js` if needed.

## License

This project is open source and available under the [MIT License](LICENSE). 