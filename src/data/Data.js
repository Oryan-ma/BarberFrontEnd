export const Services = [
    {
        id: 1,
        Barber_Id: "avi@gmail.com",
        Service_Name: "Men Haircut",
        Service_Price: 50,
        
    },
    {
        id: 2,
        Barber_Id: "avi@gmail.com",
        Service_Name: "Child Haircut",
        Service_Price: 30,
        
    },
    {
        id: 3,
        Barber_Id: "yosi@gmail.com",
        Service_Name: "Men Haircut",
        Service_Price: 50,
        
    },
];

export const Customer = [
    {
        id: 1,
        Name: "Keynan",
        Last_Name: "Peretz",
        Customer_Gender: "m",
        Phone: "0547998333",
        Password:1234,
        Email:"keynan@gmail.com",
    },
     {
         id: 2,
        Name: "niv",
        Last_Name: "Peretz",

        Customer_Gender: "m",
        Phone: "0547348333",
        Password:1234,
        Email:"niv@gmail.com",
    },
];
export const Barber = [
    {
        id: 1,
        Name: "avi barber",
        Last_Name: "Peretz",

        Gender: "m",
        Phone: "0547998333",
        Password:1234,
        Email:"avi@gmail.com",
    },
     {
         id: 2,
        Name: "yosi barber",
        Last_Name: "Peretz",

        Gender: "m",
        Phone: "0547348333",
        Password:1234,
        Email:"yosi@gmail.com",
    },
];
export const Appointment = [
    {
        id: 1,
        Barber_Email: "avi@gmail.com",
        Customer_Email: "niv@gmail.com",

        time: "2021-12-16 08:35:00.000",
    },
    {
        id: 2,
        Barber_Email: "yosi@gmail.com",
        Customer_Email: "keynan@gmail.com",

        time: "2015-03-25 12:00:00.000",
    },
];