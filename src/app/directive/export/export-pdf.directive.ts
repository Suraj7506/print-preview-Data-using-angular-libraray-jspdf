import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Directive({
  selector: '[appExportPdf]'
})
export class ExportPdfDirective {
  @Input() contentId!: string;

  @HostListener('click')
  onClick() {
    const source = (document.getElementById(this.contentId) as any as ElementRef);
    if (source) {
      const doc = new jsPDF('p', 'mm', 'a4');
      const doc1 = new jsPDF('p', 'mm', 'a4');

      const specialElementHandlers = {
        '#editor': function () {
          return true;
        }
      };

      const pdfTable = source;
      let pageCount = 1; // Initialize the page count

      doc.html((document?.getElementById(this.contentId) as HTMLElement), {
        callback: function (doc) {
          const totalPages = pageCount; // Store the total page count
          
          for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i); // Set the current page
            doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.width / 2, 287, {
              align: 'center'
            });
           
            if (i < totalPages) {
              doc.addPage();
              pageCount++;
            }
          }

          doc.save();
        }
      });
    }
  }
}
