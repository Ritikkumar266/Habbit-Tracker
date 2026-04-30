# 🚀 Quick Start - Deploy in 5 Minutes

## Step 1: Fork Repository
1. Click "Fork" button on GitHub
2. Clone your fork locally

## Step 2: Setup MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create free cluster
3. Create database user
4. Get connection string
5. Save it for Step 4

## Step 3: Deploy to Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Blueprint"
3. Connect your GitHub fork
4. Render will auto-deploy both frontend and backend

## Step 4: Add Environment Variables
In Render dashboard, add to **backend service**:
```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_random_secret_key
```

## Step 5: Test Your App
- Frontend: `https://your-app-name.onrender.com`
- Backend: `https://your-backend-name.onrender.com/api/test`

## 🎉 Done!
Your habit tracker is now live and ready to use!

## 🔧 Local Development
```bash
# Backend
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI
npm install
npm start

# Frontend (new terminal)
cd frontend
npm install
npm start
```

## 📱 Features Ready to Use
- ✅ User Registration & Login
- ✅ Create & Track Habits
- ✅ Build Streaks
- ✅ Calendar View
- ✅ Statistics Dashboard
- ✅ Dark Mode
- ✅ Mobile Responsive