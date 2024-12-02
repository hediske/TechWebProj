import { navLink } from "./navLinks"
export interface footerLink {
    "group" : string;
    "links" : navLink[];
}
export const footerLinks : footerLink[] = [
    {
        
        "group":"Categories",
        "links":[
            {
                "name":"Cleansers",
                "link":"collections/cleansers"
            },
            {
                "name":"Serums",
                "link":"collections/serums"
            },
            {
                "name":"Moisturisers",
                "link":"collections/moisturisers"
            },
            {
                "name":"Toners",
                "link":"collections/toner"
            },
        ],
        
    },
    {
        
        "group":"My Account",
        "links":[
            {
                "name":"My Account",
                "link":"/account"
            },
            {
                "name":"Addresses",
                "link":"/account/addresses"
            },
            {
                "name":"Reset Your Password",
                "link":"/account/recover"
            },
            {
                "name":"WishList",
                "link":"/account"
            },
            {
                "name":"Cart",
                "link":"/account/cart"
            },
            {
                "name":"Order History",
                "link":"/account"
            },
        ],
    },

    {
        
        "group":"Informations",
        "links":[
            {
                "name":"About Us",
                "link":"/about"
            },
            {
                "name":"Contact Us",
                "link":"/contact"
            },
            {
                "name":"Privacy Policy",
                "link":"/"
            },
            {
                "name":"Shipping & Returns",
                "link":"/"
            },
            {
                "name":"Terms & Conditions",
                "link":"/"
            },
            {
                "name":"FAQ",
                "link":"/"
            },
        ],
    },

    {
        
        "group":"Countries",
        "links":[
            {
                "name":"Tunisia",
                "link":"/"
            },
            {
                "name":"France",
                "link":"/"
            },
            {
                "name":"Italy",
                "link":"/"
            },
            {
                "name":"United States",
                "link":"/"
            },
            {
                "name":"United Kingdom",
                "link":"/"
            },
            {
                "name":"Morocco",
                "link":"/"
            },
        ],
    },
]