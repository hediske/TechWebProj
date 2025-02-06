export const sidebar : SidebarItem[]= [
    {
        name: 'Dashboard',
        title : "Admin Dashboard",
        logo: "assets/images/dash.png",
        link : 'dashboard',
    },
    {
        name: 'Users',
        title : "List of Users",
        logo: "assets/images/user.png",
        link : 'users',
    },
    {
        name: 'Orders',
        title : "List of Orders",
        logo: "assets/images/order.png",
        link : 'orders',
    },
    {
        name: 'Products',
        title : "List of Products",
        logo: "assets/images/prods.png",
        link : 'products',
    },
    {
        name: 'Monitoring',
        title : "Logs and Monitoring",
        logo: "assets/images/log.png",
        link : 'logging',
    },

]

export interface SidebarItem { 
    name: string;
    title: string;
    logo: string;
    link: string;
}