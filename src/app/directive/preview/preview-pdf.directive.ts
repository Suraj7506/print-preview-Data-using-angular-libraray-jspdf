import { Directive, Input, HostListener } from '@angular/core';
import jspdf, { jsPDF } from 'jspdf';

@Directive({
  selector: '[appPreviewPdf]'
})
export class PreviewPdfDirective {

  @Input() contentId!: string;

  @HostListener('click')
  onClick() {
    const source = document.getElementById(this.contentId);

    if (source) {
      const doc = new jsPDF('p', 'pt', 'a4');
      doc.html(source, {
        callback: function (pdf) {
          const totalPages = pdf.getNumberOfPages(); // Get the total page count

          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(150);  
            pdf.text("Company Name: Nimap", 14, 15);
            pdf.text(`Page ${i} of ${totalPages}`, pdf.internal.pageSize.getWidth() - 100, pdf.internal.pageSize.getHeight() - 30, {
              align: 'center'
            });
          }

          const blob = pdf.output('blob');
          const url = URL.createObjectURL(blob);

          const newWindow = window.open(url, '_blank', 'toolbar=0,location=0,menubar=0');
          if (newWindow) {
            newWindow.onload = function () {
              newWindow.print();
            };
          } else {
            console.error('Failed to open a new window for preview.');
          }
        }
      });
    } else {
      console.error(`Element with id '${this.contentId}' not found.`);
    }
  }

}
