# Step 1: Build the React application
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application using a web server
FROM nginx:stable-alpine

# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the default nginx.conf provided by Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose the port on which the application will run
# EXPOSE 8000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]