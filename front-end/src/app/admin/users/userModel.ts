import { columnInterface, columnType } from "src/app/shared/table/types/tableInterfaces";

export const userColumns : columnInterface[]  = [
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
        "key" : "avatar",
        "name" : "Avatar", 
        "type" : columnType.String
    },
    {
        "key" : "email",
        "name" : "Email",
        "type" :  columnType.String
    },
    {
        "key" : "role",
        "name" : "Role",
        "type" : columnType.String
    },
    {
        "key" : "status",
        "name" : "Status",
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
    name: string
    avatar:string
    email: string
    role: string
    status: string
    created_at: Date
    updated_at: Date
}

export const userAdminData: UserAdminInterface[] = [
    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    },

    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "user",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    },

    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    },

    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    },

    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 1,
        name: "John Doe",
        avatar:"https://randomuser.me/api/portraits/men/80.jpg",
        email: "HrGpO@example.com",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date()
    }
]
