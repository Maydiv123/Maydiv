# Railway Environment Variables for Strapi

## Add these variables in Railway Shared Variables:

### 1. APP_KEYS
- **Variable Name:** `APP_KEYS`
- **Value:** `["key1", "key2", "key3", "key4"]`

### 2. API_TOKEN_SALT
- **Variable Name:** `API_TOKEN_SALT`
- **Value:** `your-salt-here`

### 3. ADMIN_JWT_SECRET
- **Variable Name:** `ADMIN_JWT_SECRET`
- **Value:** `your-jwt-secret-here`

### 4. JWT_SECRET
- **Variable Name:** `JWT_SECRET`
- **Value:** `your-jwt-secret-here`

### 5. NPM_CONFIG_PRODUCTION
- **Variable Name:** `NPM_CONFIG_PRODUCTION`
- **Value:** `false`

## Quick Steps:
1. Go to Railway Shared Variables
2. Add each variable above
3. Redeploy your Strapi app
4. Check logs for success 