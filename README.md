# React Router DOM - Beginner's Guide

React Router DOM is the standard routing library for React applications. It enables navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.

## Installation

First, install the package in your React project:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

## Basic Setup

### 1. Wrap your app with BrowserRouter

In your main `index.js` or `App.js`:

```jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

### 2. Define Routes

Use the `Routes` and `Route` components to define your routes:

```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

## Core Components

### `<Link>`

Use instead of `<a>` tags for navigation:

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

### `<NavLink>`

A special version of `<Link>` that adds styling attributes when active:

```jsx
import { NavLink } from 'react-router-dom';

<NavLink 
  to="/about" 
  style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
>
  About
</NavLink>
```

### Dynamic Routes

Use `:` to define dynamic segments in your paths:

```jsx
<Route path="/users/:userId" element={<UserProfile />} />
```

Access the parameter in your component:

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
}
```

### Nested Routes

You can nest routes to create more complex layouts:

```jsx
<Route path="/products" element={<Products />}>
  <Route path=":productId" element={<ProductDetail />} />
  <Route path="new" element={<NewProduct />} />
</Route>
```

Don't forget to add an `<Outlet />` in the parent component where child routes should render:

```jsx
import { Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}
```

## Navigation Hooks

React Router provides several useful hooks:

### `useNavigate`

Programmatic navigation:

```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/about')}>
      Go to About
    </button>
  );
}
```

### `useLocation`

Access the current location object:

```jsx
import { useLocation } from 'react-router-dom';

function CurrentPath() {
  const location = useLocation();
  return <div>Current path: {location.pathname}</div>;
}
```

## Common Patterns

### 404 Page

Add a catch-all route at the end:

```jsx
<Route path="*" element={<NotFound />} />
```

### Protected Routes

Create a wrapper component for authenticated routes:

```jsx
function PrivateRoute({ children }) {
  const isAuthenticated = /* your auth logic */;
  const navigate = useNavigate();
  
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }
  
  return children;
}

// Usage:
<Route 
  path="/dashboard" 
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  } 
/>
```

## Tips for Beginners

1. Always wrap your app with `<BrowserRouter>`
2. Use `<Link>` instead of `<a>` tags to prevent full page reloads
3. The order of `<Route>` components matters - more specific paths should come first
4. Use `exact` prop (in v5) or proper path ordering (in v6) to avoid route conflicts
5. Take advantage of nested routes for complex layouts
6. Use hooks like `useParams` and `useNavigate` for dynamic routing and navigation


## Next Steps

- Learn about route loaders and actions (in v6.4+)
- Explore lazy loading routes with React.lazy
- Implement authentication flows
- Learn about route transitions and animations


This markdown provides a comprehensive beginner's guide to react-router-dom.