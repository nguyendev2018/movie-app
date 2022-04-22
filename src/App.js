import { Router, Switch } from 'react-router-dom';
import './App.css';
import { LayoutTemplate } from './templates/LayoutTemplate/LayoutTemplate';
import { history } from './utils/history';
import './scss/index.scss'
import Home from './pages/Layout/Home/Home';
import Login from './pages/Layout/Login/Login';
import Detail from './pages/Layout/Detail/Detail';
import Register from './pages/Layout/Register/Register';
import 'antd/dist/antd.css';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import AD_Film from './pages/Admin/AD_Film/AD_Film'
import Edit_Film from './pages/Admin/AD_Film/Edit_Film/Edit_Film';
import Add_Film from './pages/Admin/AD_Film/Add_Film/Add_Film';
import ShowTime_Film from './pages/Admin/ShowTime_Film/ShowTime_Film';
import AD_User from './pages/Admin/AD_User/AD_User';
function App() {
  return (
    <Router history={history}>
      <Switch>
        <LayoutTemplate exact path="/home" Component={Home}></LayoutTemplate>
        <LayoutTemplate exact path="/login" Component={Login}></LayoutTemplate>
        <LayoutTemplate exact path="/register" Component={Register}></LayoutTemplate>
        <LayoutTemplate exact path="/detail" Component={Detail}></LayoutTemplate>
        <AdminTemplate exact path="/admin/movie" Component={AD_Film}></AdminTemplate>
        <AdminTemplate exact path="/admin/movie/edit/:movieId" Component={Edit_Film}></AdminTemplate>
        <AdminTemplate exact path="/admin/movie/add" Component={Add_Film}></AdminTemplate>
        <AdminTemplate exact path="/admin/movie/showTime/:movieId" Component={ShowTime_Film}></AdminTemplate>
        {/* //USER */}
        <AdminTemplate exact path="/admin/user" Component={AD_User}></AdminTemplate>

        <LayoutTemplate exact path="/" Component={Home}></LayoutTemplate>

      </Switch>

    </Router>
  );
}

export default App
