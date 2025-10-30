# React Account Management App

A modern React-based user account management application showcasing advanced frontend development skills. This project demonstrates proficiency in React 19, TypeScript, responsive design, and state management, with a supporting backend API for data persistence.

## 🎯 Project Focus

This application serves as a portfolio piece for **ReactJS Developer** roles, emphasizing:
- Modern React patterns and hooks
- Component architecture and reusability
- Responsive UI/UX design
- TypeScript integration
- State management solutions
- API integration and error handling

## 🚀 React Features Demonstrated

### Component Architecture
- **Modular Components**: Well-structured, reusable React components
- **Custom Hooks**: `useAuth` for authentication state management
- **Higher-Order Components**: Route protection and layout components
- **Compound Components**: Form components with consistent patterns

### State Management
- **React Hooks**: useState, useEffect, useContext for local state
- **Custom Hooks**: Centralized authentication logic
- **Context API**: Global state management for user authentication
- **Optimistic Updates**: Immediate UI feedback for better UX

### User Experience
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Loading States**: Skeleton screens and loading indicators
- **Error Handling**: User-friendly error messages and recovery
- **Form Validation**: Real-time validation with visual feedback
- **Smooth Transitions**: CSS animations and micro-interactions

### Modern React Patterns
- **Functional Components**: Modern React with hooks
- **TypeScript Integration**: Type-safe development experience
- **React Router**: Client-side routing with protected routes
- **Axios Integration**: HTTP client with interceptors
- **Environment Configuration**: Runtime environment handling

## 🛠 Frontend Tech Stack

### Core Framework
- **React 19**: Latest React features and concurrent rendering
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Vite**: Fast build tool and development server

### UI & Styling
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, consistent icon system
- **Glassmorphism**: Modern design with backdrop blur effects
- **Responsive Grid**: Mobile-first responsive layouts

### State & Data
- **React Hooks**: Built-in state management
- **Axios**: HTTP client with request/response interceptors
- **Local Storage**: Client-side token persistence
- **Context API**: Global state for authentication

### Development Tools
- **ESLint**: Code linting and quality enforcement
- **React DevTools**: Component debugging and profiling
- **Vite Dev Server**: Fast hot module replacement
- **TypeScript Compiler**: Type checking and compilation

### Backend Support
- **Node.js/Express**: RESTful API server
- **MongoDB**: NoSQL database for user data
- **JWT Authentication**: Secure token-based auth
- **Vercel Deployment**: Serverless backend hosting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **pnpm**
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Giru-03/Log-app.git
cd Log-app
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env  # If .env.example exists, otherwise create .env manually
```

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install
```

## ⚙️ Environment Variables

### Backend (.env)

Create a `.env` file in the `backend` directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/logapp
# Or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/logapp

# JWT
JWT_SECRET=your_super_secret_jwt_key_here

# Node Environment
NODE_ENV=development
```

### Frontend (.env)

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:3000
# For production: VITE_API_URL=https://your-backend-url.vercel.app
```

## 🚀 Running the Application

### Development Mode

1. **Start the Backend**:
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:3000`

2. **Start the Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

### Production Build

1. **Build the Backend**:
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build the Frontend**:
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <jwt_token>
```

#### Update User Profile
```http
PATCH /api/auth/me
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Smith",
  "email": "johnsmith@example.com",
  "phone": "+1234567890"
}
```

### Health Check
```http
GET /health
```

## 🏗️ React Architecture & Component Design

### Application Structure
```
frontend/src/
├── components/           # Reusable UI components
│   ├── AccountEdit.tsx   # Profile editing form with validation
│   ├── AccountView.tsx   # Profile display with avatar generation
│   ├── LoginForm.tsx     # Authentication form with error handling
│   ├── RegisterForm.tsx  # Registration form with password confirmation
│   ├── Navbar.tsx        # Navigation with conditional rendering
│   └── LoadingSpinner.tsx # Reusable loading indicator
├── hooks/               # Custom React hooks
│   └── useAuth.ts       # Authentication state management
├── services/            # External service integrations
│   └── api.ts           # Axios configuration and interceptors
├── App.tsx              # Main application component with routing
├── main.tsx             # React application entry point
└── index.css            # Global styles and Tailwind imports
```

### Component Patterns Implemented

#### Custom Hook: `useAuth`
```typescript
const { user, loading, login, register, logout, updateMe } = useAuth();
```
- **Centralized Logic**: Authentication state and API calls
- **Type Safety**: Full TypeScript integration
- **Error Handling**: Comprehensive error management
- **Persistence**: Local storage token management

#### Route Protection Pattern
```typescript
<Route path="/account" element={user ? <AccountView /> : <Navigate to="/login" replace />} />
```
- **Conditional Rendering**: Auth-based component display
- **Redirect Logic**: Seamless navigation flow
- **Loading States**: Prevents flash of unauthorized content

#### Form Components
- **Controlled Inputs**: React state-driven form controls
- **Validation**: Real-time input validation
- **Error Display**: User-friendly error messaging
- **Loading States**: Submit button state management

### State Management Strategy
- **Local State**: useState for component-specific state
- **Global State**: Context API for authentication
- **Server State**: API responses managed via hooks
- **Optimistic Updates**: Immediate UI feedback

## 📁 Complete Project Structure

```
Log-app/
├── backend/                    # Supporting API server
│   ├── src/
│   │   ├── config/db.ts        # MongoDB connection
│   │   ├── controllers/authController.ts
│   │   ├── middleware/auth.ts  # JWT verification
│   │   ├── models/User.ts      # User schema
│   │   ├── routes/auth.ts      # API endpoints
│   │   └── server.ts           # Express server
│   ├── package.json
│   ├── tsconfig.json
│   └── vercel.json
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/         # UI components
│   │   ├── hooks/             # Custom hooks
│   │   ├── services/          # API integration
│   │   ├── App.tsx            # Main app with routing
│   │   ├── main.tsx           # React entry point
│   │   └── index.css          # Global styles
│   ├── package.json
│   ├── vite.config.ts
│   ├── index.html
│   └── vercel.json
├── .gitignore
└── README.md
```

## 🌐 Deployment

### Vercel Deployment

#### Backend Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
3. Deploy the `backend` directory

#### Frontend Deployment
1. In Vercel, deploy the `frontend` directory
2. Set environment variable: `VITE_API_URL` to your backend URL
3. Enable SPA routing with the provided `vercel.json`

### Environment URLs
- **Production Frontend**: https://log-app-nine.vercel.app
- **Production Backend**: Configure based on your Vercel deployment

## 💼 React Developer Skills Demonstrated

This project showcases the following competencies essential for ReactJS developer roles:

### Core React Skills
- ✅ **Modern React (v19)**: Functional components, hooks, concurrent features
- ✅ **TypeScript Integration**: Type-safe development, interfaces, generics
- ✅ **Component Architecture**: Modular, reusable, well-structured components
- ✅ **Custom Hooks**: Logic abstraction, state management, side effects
- ✅ **React Router**: Client-side routing, protected routes, navigation

### State Management
- ✅ **React Hooks**: useState, useEffect, useContext, useRef
- ✅ **Context API**: Global state management for authentication
- ✅ **Custom Hooks**: Centralized business logic
- ✅ **Optimistic Updates**: Enhanced user experience patterns

### UI/UX Development
- ✅ **Responsive Design**: Mobile-first approach with TailwindCSS
- ✅ **Modern CSS**: Utility-first styling, glassmorphism, animations
- ✅ **Form Handling**: Controlled components, validation, error states
- ✅ **Loading States**: User feedback, skeleton screens, transitions
- ✅ **Accessibility**: Semantic HTML, keyboard navigation, screen readers

### Development Practices
- ✅ **Code Quality**: ESLint, TypeScript, clean code principles
- ✅ **API Integration**: Axios, interceptors, error handling
- ✅ **Environment Management**: Runtime configuration, security
- ✅ **Build Tools**: Vite, hot reload, optimized production builds
- ✅ **Deployment**: Vercel, CI/CD, environment-specific builds

### Professional Skills
- ✅ **Problem Solving**: Authentication flows, state management challenges
- ✅ **Code Organization**: Clean architecture, separation of concerns
- ✅ **Documentation**: Comprehensive README, code comments
- ✅ **Version Control**: Git workflow, commit conventions
- ✅ **Testing Readiness**: Component structure ready for unit/integration tests

## 🤝 Contributing

As a portfolio project, this repository welcomes constructive feedback and suggestions for improvement. For contributions:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/react-improvement`)
3. Make your enhancements following React best practices
4. Ensure **TypeScript** compliance and **ESLint** passes
5. Test thoroughly across different screen sizes
6. Submit a **Pull Request** with detailed description

### Code Quality Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: All linting rules must pass
- **React**: Modern patterns and hooks preferred
- **Accessibility**: WCAG guidelines followed
- **Performance**: Optimized rendering and bundle size

## 📄 License

This project is created for portfolio purposes and educational use. All rights reserved.

## 👥 Author

**Giru** - ReactJS Developer Portfolio Project
- GitHub: [Giru-03](https://github.com/Giru-03)
- LinkedIn: [Your LinkedIn Profile]
- Email: [your.email@example.com]

## 🏆 Key Achievements

- **Modern Tech Stack**: Latest React 19 with TypeScript
- **Production Ready**: Deployed on Vercel with proper CI/CD
- **Scalable Architecture**: Component-based design ready for expansion
- **User Experience**: Polished UI with smooth interactions
- **Code Quality**: Professional-grade code following industry standards

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework and community
- **Vite**: Lightning-fast build tool and development experience
- **TailwindCSS**: Utility-first CSS framework that revolutionized styling
- **Vercel**: Seamless deployment platform for modern web applications
- **Open Source Community**: Countless libraries and tools that power this project

---

**🚀 Ready for ReactJS Developer Opportunities**: This project demonstrates production-level React development skills, modern architecture patterns, and attention to user experience details that are essential for professional frontend development roles.
