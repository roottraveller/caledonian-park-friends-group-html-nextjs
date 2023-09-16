import {Menu} from "@/types/menu";

const menuData: Menu[] = [
    {
        id: 1,
        title: "About",
        newTab: false,
        submenu: [
            {
                id: 11,
                title: "About CPFG",
                path: "/about/cpfg",
                newTab: false,
            },
            {
                id: 12,
                title: "History of the Park",
                path: "/about/history",
                newTab: false,
            },
            {
                id: 13,
                title: "Park Groups",
                path: "/about/park-groups",
                newTab: false,
            },
            {
                id: 14,
                title: "Policies",
                path: "/about/documents",
                newTab: false,
            },
        ],
    },
    {
        id: 2,
        title: "What’s here",
        newTab: false,
        submenu: [
            {
                id: 21,
                title: "Nature in the park, ponds, orchards etc",
                path: "/whats-here/nature-in-the-park",
                newTab: false,
            },
            {
                id: 22,
                title: "Family Activities",
                path: "/whats-here/family-activities",
                newTab: false,
            },
            {
                id: 23,
                title: "Clock Tower, Guided Tours",
                path: "/whats-here/clock-tower",
                newTab: false,
            },
            {
                id: 24,
                title: "Amenities e.g. Café, Toilets etc",
                path: "/whats-here/amenities",
                newTab: false,
            },
            {
                id: 25,
                title: "Amphitheatre",
                path: "/whats-here/amphitheatre",
                newTab: false,
            },
            // {
            //     id: 26,
            //     title: "Error Page",
            //     path: "/error",
            //     newTab: false,
            // },
        ],
    },
    {
        id: 3,
        title: "Get Involved",
        newTab: false,
        submenu: [
            {
                id: 31,
                title: "Contact Us",
                path: "/get-involved/contact",
                newTab: false,
            },
            {
                id: 32,
                title: "Events Calendar",
                path: "/get-involved/events-calendar",
                newTab: false,
            },
        ],
    },
    {
        id: 4,
        title: "Social Media",
        path: "/social",
        newTab: false,
    },
    {
        id: 5,
        title: "Gallery",
        path: "/gallery",
        newTab: false,
    },
];
export default menuData;
