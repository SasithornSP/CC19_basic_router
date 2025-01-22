## Step 1 Create project
```bash
npm create vite .
npm install
npm run dev
```

## Step 2 push project to github
```bash
git init
git add .
git commit -m 'name'
git push
```

### When update code
```bash
git add .
git commit -m 'name'
git push
```

### Step3 install React Router
```bash
npm i react-router
```
### Step04 New foder keep routes
```bash
สร้างโฟเดอใหม่ ใช้เก็บNavBar
note!!!
index เป็นdefaul root 
```

```jsx
import React from 'react'
import { Link, Outlet, Route,Routes } from 'react-router';
import Layout from '../Layouts/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Manage from '../pages/Manage';
import Setting from '../pages/Setting';


function AppRoutes() {

  return (
    <div>
   
    <Routes>
      {/* Public */}
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      </Route>
      
      {/* Private */}
        <Route path='admin'element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='manage' element={<Manage/>}/>
        <Route path='setting' element={<Setting/>}/>
      </Route>

    </Routes>
    </div>
  )
}

export default AppRoutes
```

##Step 4 Global state with Zustand
```bash
npm install zustand
```

##Step 5 Fetch data
```bash
npm install axios
```

##Use Lucide Icon
```bash
https://lucide.dev/guide/installation
npm install lucide-react
```