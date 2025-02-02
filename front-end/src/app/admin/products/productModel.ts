import { columnInterface, columnType } from "src/app/shared/table/types/tableInterfaces";

export const productColumns : columnInterface[]  = [
    {
        "key" : "id",
        "name" : "ID",
        "type" : columnType.Number
    },
    {
        "key" : "name",
        "name" : "Name",
        "type" : columnType.String
    },
    {
        "key" : "brand",
        "name" : "Brand", 
        "type" : columnType.String
    },
    {
        "key" : "stock",
        "name" : "Stock",
        "type" :  columnType.Number
    },
    {
        "key" : "archived",
        "name" : "Archived",
        "type" : columnType.String
    },
    {
        "key" : "description",
        "name" : "Description",
        "type" : columnType.String
    },
    {
        "key" : "price",
        "name" : "Price",
        "type" :   columnType.Number  
    },
    {
        "key" : "availability",
        "name" : "Availability",
        "type" : columnType.String
    },{
        "key" : "images",
        "name" : "Images",
        "type" : columnType.String
    }
]



export interface ProductAdminInterface {
    // id: number
    // name: string
    // avatar:string
    // email: string
    // role: string
    // status: string
    // created_at: Date
    // updated_at: Date
    id: number,
    name: string,
    brand: string,
    stock: number,
    archived: boolean,
    type: string,
    description: string,
    price: number,
    images: any
    
    // [
    //   {
    //     id: 1,
    //     url: http://localhost:3000/uploads/1738531471171-Microsoft Excel 2013.desktop
    //   },
    //   {
    //     id: 2,
    //     url: http://localhost:3000/uploads/1738531471194-lait-delic-.jpg
    //   }
    // ],
    availability: string
}

// export const userAdminData: UserAdminInterface[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "user",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },
//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },
//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },
//     {
//         id: 1,
//         name: "John Doe",
//         avatar:"https://randomuser.me/api/portraits/men/80.jpg",
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     }
// ]
