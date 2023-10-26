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
      doc.setFontSize(12);

      doc.html(source, {
        
        callback: function (pdf) {
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
