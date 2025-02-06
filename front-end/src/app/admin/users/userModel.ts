import { columnInterface, columnType } from "src/app/shared/table/types/tableInterfaces";

export const userColumns : columnInterface[]  = [
    {
        "key" : "id",
        "name" : "ID",
        "type" : columnType.Number
    },
    {
        "key" : "firstName",
        "name" : "First Name",
        "type" : columnType.String
    },
    {
        "key" : "lastName",
        "name" : "Last Name", 
        "type" : columnType.String
    },
    {
        "key" : "phoneNumber",
        "name" : "Phone", 
        "type" : columnType.String
    },
    {
        "key" : "email",
        "name" : "Email",
        "type" :  columnType.String
    },
    {
        "key" : "blocked",
        "name" : "Blocked", 
        "type" : columnType.String

    },
    {
        "key" : "role",
        "name" : "Role",
        "type" : columnType.String
    },
    {
        "key" : "address",
        "name" : "Address",
        "type" : columnType.String
    },
    {
        "key" : "created_at",
        "name" : "Created At",
        "type" :   columnType.Date  
    },
    {
        "key" : "updated_at",
        "name" : "Updated At",
        "type" : columnType.Date
    }
]



export interface UserAdminInterface {
    id: number
    firstname: string
    lastname: string
    phoneNumber: number
    blocked:boolean
    email: string
    role: string
    status: string
    created_at: Date
    updated_at: Date
}

// export const userAdminData: UserAdminInterface[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         blocked:true,
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         blocked:true,
//         email: "HrGpO@example.com",
//         role: "user",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         blocked:true,
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         blocked:false,
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },
//     {
//         id: 1,
//         name: "John Doe",
//         blocked:true,
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },
//     {
//         id: 1,
//         name: "John Doe",
//         blocked:true,
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },

//     {
//         id: 1,
//         name: "John Doe",
//         blocked:true,
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     },
//     {
//         id: 1,
//         name: "John Doe",
//         blocked:true,
//         email: "HrGpO@example.com",
//         role: "admin",
//         status: "active",
//         created_at: new Date(),
//         updated_at: new Date()
//     }
// ]
