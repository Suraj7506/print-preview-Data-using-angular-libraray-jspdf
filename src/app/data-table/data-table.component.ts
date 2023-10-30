    import { Component, VERSION } from '@angular/core';
    import jspdf, { jsPDF } from 'jspdf';


    @Component({
      selector: 'app-data-table',
      templateUrl: './data-table.component.html',
      styleUrls: ['./data-table.component.css']
    })
    export class DataTableComponent {

      name = "Angular"; // Sample value, set to your desired value
      company = "Your Company"; // Sample value, set to your desired value
      address = "123 Main Street"; 

      // public myData: any[] = [
      //   {
      //     sectionTitle: 'Journal de caisse MyOrders du 01/01/2020',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Nguyen', lastName: 'Dai' },
      //       { no: 2, firstName: 'John', lastName: 'Doe' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      //   {
      //     sectionTitle: 'tva repartition on PAYGREEN payment',
      //     headers: ['No.', 'FirstName', 'Last Name'],
      //     items: [
      //       { no: 1, firstName: 'Alice', lastName: 'Smith' },
      //       { no: 2, firstName: 'Bob', lastName: 'Johnson' },
      //       // Add more data as needed
      //     ]
      //   },
      // ];
    
      USERS = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "email": "sincere@april.biz",
          "phone": "1-770-736-8031 x56442"
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "email": "shanna@melissa.tv",
          "phone": "010-692-6593 x09125"
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "email": "nathan@yesenia.net",
          "phone": "1-463-123-4447",
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "email": "julianne@kory.org",
          "phone": "493-170-9623 x156"
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "email": "lucio@annie.ca",
          "phone": "(254)954-1289"
        },
        {
          "id": 6,
          "name": "Mrs. Dennis",
          "email": "karley@jasper.info",
          "phone": "1-477-935-8478 x6430"
        },
        {
          "id": 7,
          "name": "Leanne Graham",
          "email": "sincere@april.biz",
          "phone": "1-770-736-8031 x56442"
        },
        {
          "id": 8,
          "name": "Ervin Howell",
          "email": "shanna@melissa.tv",
          "phone": "010-692-6593 x09125"
        },
        {
          "id": 9,
          "name": "Clementine Bauch",
          "email": "nathan@yesenia.net",
          "phone": "1-463-123-4447",
        },
        {
          "id": 10,
          "name": "Patricia Lebsack",
          "email": "julianne@kory.org",
          "phone": "493-170-9623 x156"
        },
        {
          "id": 11,
          "name": "Chelsey Dietrich",
          "email": "lucio@annie.ca",
          "phone": "(254)954-1289"
        },
        {
          "id": 12,
          "name": "Mrs. Dennis",
          "email": "karley@jasper.info",
          "phone": "1-477-935-8478 x6430"
        },
        {
          "id": 13,
          "name": "Leanne Graham",
          "email": "sincere@april.biz",
          "phone": "1-770-736-8031 x56442"
        },
        {
          "id": 14,
          "name": "Ervin Howell",
          "email": "shanna@melissa.tv",
          "phone": "010-692-6593 x09125"
        },
        {
          "id": 15,
          "name": "Clementine Bauch",
          "email": "nathan@yesenia.net",
          "phone": "1-463-123-4447",
        },
        {
          "id": 16,
          "name": "Patricia Lebsack",
          "email": "julianne@kory.org",
          "phone": "493-170-9623 x156"
        },
        {
          "id": 17,
          "name": "Chelsey Dietrich",
          "email": "lucio@annie.ca",
          "phone": "(254)954-1289"
        },
        {
          "id": 18,
          "name": "Mrs. Dennis",
          "email": "karley@jasper.info",
          "phone": "1-477-935-8478 x6430"
        },
        {
          "id": 19,
          "name": "Leanne Graham",
          "email": "sincere@april.biz",
          "phone": "1-770-736-8031 x56442"
        },
        {
          "id": 20,
          "name": "Ervin Howell",
          "email": "shanna@melissa.tv",
          "phone": "010-692-6593 x09125"
        },
        
      ];
    
    
    
    
    }    
