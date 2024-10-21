import { RiTodoLine } from 'react-icons/ri';
import { FaCodepen } from 'react-icons/fa';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { PiBooks } from 'react-icons/pi';
import { MdTravelExplore } from 'react-icons/md';
import { IoNewspaperOutline } from 'react-icons/io5';
import { MdOutlineChat } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';


let dataProjects = [
    {
        id: 1,
        name: 'Task App',
        link: 'https://seivanesandro.github.io/todo/',
        icon: (
            <RiTodoLine
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 2,
        name: 'CodePen App',
        link: 'https://seivanesandro.github.io/code_pen/',
        icon: (
            <FaCodepen
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 3,
        name: 'Movie-lib App',
        link: 'https://seivanesandro.github.io/movies_lib/#/',
        icon: (
            <MdOutlineLocalMovies
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 4,
        name: 'BookSearch App',
        link: 'https://seivanesandro.github.io/MysearchBooks/#/',
        icon: (
            <PiBooks
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 5,
        name: 'Travel_Advisor App',
        link: 'https://seivanesandro.github.io/map_advisor/',
        icon: (
            <MdTravelExplore
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 6,
        name: 'News APP',
        link: 'https://seivanesandro.github.io/news_app/',
        icon: (
            <IoNewspaperOutline
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 7,
        name: 'Chat APP',
        link: 'https://seivanesandro.github.io/MyChat/',
        icon: (
            <MdOutlineChat
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 8,
        name: 'E-shop APP',
        link: 'https://seivanesandro.github.io/e-shop/',
        icon: (
            <MdOutlineShoppingCart
                size={80}
                className="icon-animation"
            />
        )
    },
    {
        id: 9,
        name: 'Movie Favorite APP',
        link: 'https://seivanesandro.github.io/portfolio/',
        icon: (
            <MdFavoriteBorder
                size={80}
                className="icon-animation"
            />
        )
    }
];

export default dataProjects;
