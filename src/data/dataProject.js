import { RiTodoLine } from 'react-icons/ri';
import { FaCodepen } from 'react-icons/fa';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { PiBooks } from 'react-icons/pi';
import { MdTravelExplore } from 'react-icons/md';
import { IoNewspaperOutline } from 'react-icons/io5';
import { MdOutlineChat } from 'react-icons/md';

let dataProjects = [
    {
        id: 1,
        name: 'App TODO',
        link: 'https://seivanesandro.github.io/todo/',
        icon: (
            <RiTodoLine size={80} color="black" />
        )
    },
    {
        id: 2,
        name: 'App CodePen',
        link: 'https://seivanesandro.github.io/code_pen/',
        icon: (
            <FaCodepen size={80} color="black" />
        )
    },
    {
        id: 3,
        name: 'App Movie-lib',
        link: 'https://seivanesandro.github.io/movies_lib/#/',
        icon: (
            <MdOutlineLocalMovies
                size={80}
                color="black"
            />
        )
    },
    {
        id: 4,
        name: 'App BookSearch',
        link: 'https://seivanesandro.github.io/MysearchBooks/#/',
        icon: <PiBooks size={80} color="black" />
    },
    {
        id: 5,
        name: 'App Travel_Advisor',
        link: 'https://seivanesandro.github.io/map_advisor/',
        icon: (
            <MdTravelExplore
                size={80}
                color="black"
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
                color="black"
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
                color="black"
            />
        )
    }
];

export default dataProjects;
