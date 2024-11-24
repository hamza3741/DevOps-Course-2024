# React Web Application with Nginx & Docker

This Real Estate Portfolio application demonstrates how to containerize a web app using Docker and serve it using Nginx. It is built for a DevOps course, where the goal is to use Docker to deploy and run the application with minimal manual steps.

## Features

- **Single Page Application (SPA)**: Built with React for a fast and responsive user experience.
- **Dockerized Deployment**: Fully containerized using Docker to simplify deployment and scalability.
- **Static File Hosting via Nginx**: Nginx is used to serve the static files of the React app after building it.
- **Production-Ready Build**: Optimized build process with `npm run build` for a production environment.


## Getting Started

These instructions will guide you on how to run the application locally or in a Docker container. Everything is automated via Docker, meaning no need for manual installations.

### Prerequisites

Make sure you have the following installed:

- **[Docker](https://www.docker.com/)**: This application is designed to run inside Docker containers, and you'll need Docker installed to build and run the app.

### Running the Application 🚀

1. Clone this repository to your local machine:

   ```bash
   git clone <[repository-url](https://github.com/hamza3741/DevOps-Course-2024.git)>
   cd <[repository-directory](DevOps-Course-2024/real-estate-consultancy-app)>
   
2. Build the Docker Image:

   ```bash
   docker build -t react-nginx-app .

   
3. Run the Docker container:

   ```bash
   docker run -p 80:80 react-nginx-app

4. Access the webpage in your browser:

   ```bash
   http://localhost
