import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBorad from './DashBoard/DashBoard/DashBoard';
import AddBlog from './DashBoard/AddBlog/AddBlog';
import UpdateBlog from './DashBoard/UpdateBlog/UpdateBlog';
import BlogDetails from './Pages/Home/BlogDetails/BlogDetails';


function App() {
  return (
    <div className="App">
      
       <AuthProvider>
       <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/dashboard">
              <DashBorad></DashBorad>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/addblog">
              <AddBlog></AddBlog>
            </Route>
            <Route path="/UpdateBlog/:id">
              <UpdateBlog></UpdateBlog>
            </Route>
            <Route path="/blogDetails/:id">
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
       </AuthProvider>
      
    </div>
  );
}

export default App;
