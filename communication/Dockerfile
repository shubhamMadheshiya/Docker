# Use the official Node.js base image
FROM node

# Set the working directory in the container
WORKDIR /communication

# Copy the package.json and package-lock.json (if available) to install dependencies first
COPY . .

# Install the project dependencies (including axios)
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Command to run the application
CMD [ "node","container.js" ]
