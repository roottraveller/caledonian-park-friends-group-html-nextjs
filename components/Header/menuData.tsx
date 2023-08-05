import {Menu} from "@/types/menu";

const menuData: Menu[] = [
    {
        id: 1,
        title: "About",
        path: "/about",
        newTab: false,
    },
    {
        id: 2,
        title: "Social",
        path: "/social",
        newTab: false,
    },
    {
        id: 3,
        title: "Support",
        path: "/contact-todo",
        newTab: false,
    },
    {
        id: 4,
        title: "Pages",
        newTab: false,
        submenu: [
            {
                id: 41,
                title: "About Page",
                path: "/about",
                newTab: false,
            },
            {
                id: 43,
                title: "Blog Grid Page",
                path: "/blog",
                newTab: false,
            },
            {
                id: 44,
                title: "Blog Sidebar Page",
                path: "/blog-sidebar",
                newTab: false,
            },
            {
                id: 45,
                title: "Blog Details Page",
                path: "/blog-details",
                newTab: false,
            },
            {
                id: 46,
                title: "Sign In Page",
                path: "/signin",
                newTab: false,
            },
            {
                id: 47,
                title: "Sign Up Page",
                path: "/signup",
                newTab: false,
            },
            {
                id: 48,
                title: "Error Page",
                path: "/error",
                newTab: false,
            },
        ],
    },
    {
        id: 5,
        title: "Gallery",
        path: "/gallery",
        newTab: false,
    },
    {
        id: 6,
        title: "Documents",
        path: "/documents",
        newTab: false,
    },
    {
        id: 7,
        title: "Contact Us",
        path: "/contact",
        newTab: false,
    },
];
export default menuData;
