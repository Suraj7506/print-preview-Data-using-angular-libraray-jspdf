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
      const doc = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'p',
      });
      let pageTopMargin = 20;
      const pageNumbersY = doc.internal.pageSize.height - 10;
      const contentHeight = doc.internal.pageSize.height - pageTopMargin - pageNumbersY;
      doc.html((document?.getElementById(this.contentId) as HTMLElement), {
        callback: function (doc) {
          const totalPages = doc.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.text("Company Name: Nimap", 50, pageTopMargin);
            pageTopMargin = 20;
            const currentPageHeight = i === totalPages ? doc.internal.pageSize.height - pageTopMargin : contentHeight;
            const usedSpace = pageTopMargin + currentPageHeight;
            const remainingSpace = doc.internal.pageSize.height - usedSpace;
            if (remainingSpace < 0 && i < totalPages) {
              doc.addPage();
              pageTopMargin = 20;
            }
            doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.width / 2, pageNumbersY, {
              align: 'center',
            });
          }
          doc.save("a4.pdf");
        },
      });
    } else {
      console.error(`Element with id '${this.contentId}' not found.`);
    }
  }


}
