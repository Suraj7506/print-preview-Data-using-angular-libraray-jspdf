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

      public myData: any[] = [
        {
          sectionTitle: 'Journal de caisse MyOrders du 01/01/2020',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Nguyen', lastName: 'Dai' },
            { no: 2, firstName: 'John', lastName: 'Doe' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
        {
          sectionTitle: 'tva repartition on PAYGREEN payment',
          headers: ['No.', 'FirstName', 'Last Name'],
          items: [
            { no: 1, firstName: 'Alice', lastName: 'Smith' },
            { no: 2, firstName: 'Bob', lastName: 'Johnson' },
            // Add more data as needed
          ]
        },
      ];
    }    
