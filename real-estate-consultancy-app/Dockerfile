# Step 1: Set up the Node.js environment
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Set up a lightweight web server (Nginx) to serve the built app
FROM nginx:alpine

# Step 8: Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to access the app
EXPOSE 80

# Step 10: Start Nginx to serve the React app
CMD ["nginx", "-g", "daemon off;"]
