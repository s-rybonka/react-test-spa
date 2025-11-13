# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM caddy:2-alpine

# Add non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy built assets and configuration
COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile

# Set proper permissions
RUN chown -R appuser:appgroup /usr/share/caddy /etc/caddy

# Switch to non-root user
USER appuser

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"] 