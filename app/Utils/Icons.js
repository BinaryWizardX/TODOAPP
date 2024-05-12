import { FaHome } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

export const menu = [
    {
        index: 0,
        name: "All Tasks",
        icon: FaHome,
        path: "/",
    },
    {
        index: 1,
        name: "Important",
        icon: FaListCheck,
        path: "/important",
    },
    {
        index: 2,
        name: "Completed",
        icon: MdDone,
        path: "/completed",
    },
    {
        index: 3,
        name: "Do It Now",
        icon: FaClipboardList,
        path: "/doitnow",
    },
];





