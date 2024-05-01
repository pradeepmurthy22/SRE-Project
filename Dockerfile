# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install prom-client

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run the application
CMD ["node", "app.js"]

