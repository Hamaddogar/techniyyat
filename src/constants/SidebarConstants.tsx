import SortRoundedIcon from "@mui/icons-material/SortRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

export const sidebarConstant = [
  { name: "Dashboard", link: "/dashboard", icon: SortRoundedIcon },
  { name: "Reviews Request", link: "/reviews-request", icon: ChatOutlinedIcon },
  { name: "User Roles", link: "/user-roles", icon: PeopleAltOutlinedIcon },
  { name: "Products", link: "/products", icon: Inventory2OutlinedIcon },
  { name: "Vendors", link: "/vendors", icon: StorefrontOutlinedIcon },
  { name: "Integrations", link: "/integrations", icon: TuneOutlinedIcon },
];
