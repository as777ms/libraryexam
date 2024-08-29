import { Link, Outlet } from 'react-router-dom';
import "./layout.css";
import Button from '../button/button';
import Acordionfooter from '../acordionfooter/acordionfooter';
const Layout = () => {
    return (
        <>
        <header className='header'>
            <div className="logo"></div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/posts">Что выбрать</Link>
                <Link to="/about">About</Link>
                <Button />
            </div>
        </header>

        <nav className="category-nav">
            
            <Link to={"/books"}>Книги</Link>
            <Link to={"/audiobooks"}>Аудиокниги</Link>
            <Link to={"/news"}>Новинки</Link>
            <Link to={"/topbooks"}>Топ книг</Link>
            <Link to={"/topaudiobooks"}>Топ аудиокниг</Link>
        </nav>

        <main className="container">
            <Outlet />
        </main>

        <footer className="footer">
            
        <Acordionfooter />
        
        </footer>
        </>
    );
};

export { Layout };
    