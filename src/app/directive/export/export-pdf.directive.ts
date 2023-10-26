import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Directive({
  selector: '[appExportPdf]'
})
export class ExportPdfDirective {
  @Input() contentId!: string;
  @Input() jsonData: any[] = [];

  @HostListener('click')
  onClick() {
    const source = document.getElementById(this.contentId);

    if (source) {
      const doc = new jsPDF('p', 'mm', 'a4');
      const specialElementHandlers = {
        '#editor': function () {
          return true;
        },
      };

      doc.setFont('helvetica'); // Set the font family
      doc.setFontSize(9); // Set the font size

      // Convert JSON data to PDF
      this.convertDataToPDF(doc);

      doc.html((document?.getElementById(this.contentId) as HTMLElement), {
        callback: function (doc) {
          const totalPages = doc.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.text("Company Name: Nimap", 50, 15);
            doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.width / 2, 287, {
              align: 'center',
            });
          }

          doc.save();
        },
      });
    } else {
      console.error(`Element with id '${this.contentId}' not found.`);
    }
  }

  convertDataToPDF(doc: jsPDF) {
    let startY = 40; // Start position for the content
    const xOffset = 10; // Offset for section titles
    const itemHeight = 10; // Height of each item row

    this.jsonData.forEach((section) => {
      // Add section title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(section.sectionTitle, xOffset, startY);
      startY += 15;

      // Add section headers
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      section.headers.forEach((header: string | string[], index: number) => {
        doc.text(header, xOffset + index * 40, startY);
      });
      startY += 10;

      // Add section items
      section.items.forEach((item: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        startY += itemHeight;
        Object.values(item).forEach((value:any, index) => {
          doc.text(value.toString(), xOffset + index * 40, startY);
        });
      }),

      // Move to the next section
      startY += 20 // Adjust for spacing between sections
    });
  }

}
