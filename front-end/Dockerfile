# Use lightweight nginx image to serve static files
FROM nginx:alpine

# Copy all frontend files (HTML, CSS, JS) to nginx
COPY . /usr/share/nginx/html

# Expose port 80 (default HTTP port)
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]