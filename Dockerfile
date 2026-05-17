# Stage 1: Build the Vite React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove the default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx template. 
# The nginx:alpine image will automatically run envsubst on this template 
# and output it to /etc/nginx/conf.d/default.conf at startup.
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Render sets the PORT environment variable dynamically (usually to 10000).
# We provide a default fallback here.
ENV PORT=10000

# Expose the port
EXPOSE $PORT

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
