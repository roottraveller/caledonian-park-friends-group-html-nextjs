## Troubleshooting Guide

#### 1. Failed to load resource: the server responded with a status of 404 (Not Found)

**Solution:** Delete `node_modules`, `.cache` folder, and `package-lock.json` and run npm install again.

Run the following commands in your project directory to remove potentially corrupted dependencies and cached files:
```bash
rm -rf node_modules
rm -rf .cache
rm package-lock.json
```

#### 2. GET http://localhost:3000/ 404 (Not Found) 

**Solution:**  Add the following to `next.config.js`:

```bash
// reactStrictMode: true,
// basePath: '/github-pages',
```
