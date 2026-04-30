# 🚀 Habit Tracker - Deployment Guide

## Quick Deploy to Render

### Option 1: One-Click Deploy (Recommended)
1. Fork this repository to your GitHub account
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and deploy both services

### Option 2: Manual Deploy

#### Deploy Backend (API)
1. Create new **Web Service** on Render
2. **Repository**: Your GitHub repo
3. **Root Directory**: `backend`
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`
6. **Environment Variables**:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/habit-tracker?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key_12345
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.onrender.com
   ```

#### Deploy Frontend (Static Site)
1. Create new **Static Site** on Render
2. **Repository**: Your GitHub repo
3. **Root Directory**: `frontend`
4. **Build Command**: `npm install && npm run build`
5. **Publish Directory**: `build`
6. **Environment Variables**:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```

## 📋 Prerequisites

### 1. MongoDB Atlas Setup
1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create new cluster
3. Create database user
4. Get connection string
5. Replace in `MONGODB_URI` environment variable

### 2. Environment Variables
- Update `backend/.env` with your MongoDB URI
- Update `frontend/.env.production` with your backend URL

## 🔧 Local Development

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🌐 Live URLs
- **Frontend**: https://your-app-name.onrender.com
- **Backend API**: https://your-backend-name.onrender.com
- **API Test**: https://your-backend-name.onrender.com/api/test

## 🎯 Features
- ✅ User Authentication (Register/Login)
- ✅ Habit Creation & Management
- ✅ Streak Tracking
- ✅ Calendar View
- ✅ Statistics & Analytics
- ✅ Dark Mode
- ✅ Responsive Design

## 🔒 Security
- JWT Authentication
- Password Hashing (bcrypt)
- CORS Configuration
- Environment Variables for secrets

## 📱 Tech Stack
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Database**: MongoDB Atlas
- **Deployment**: Render
- **Authentication**: JWT + bcrypt