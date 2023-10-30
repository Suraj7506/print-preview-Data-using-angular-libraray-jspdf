import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';


@Directive({
  selector: '[appExportPdf]'
})
export class ExportPdfDirective {
  @Input() contentId!: string;
  @Input() jsonData: any[] = [];
  @HostListener('click')
  onClick() {
    this.captureContent().then((pages) => {
      this.generatePDF(pages);
    });
  }

  private captureContent(): Promise<HTMLCanvasElement[]> {
    return new Promise((resolve) => {
      const DATA: any = document.getElementById(this.contentId);
      DATA.scrollTop = 0;

      html2canvas(DATA, { scrollY: -window.scrollY }).then((canvas) => {
        const pageHeight = 700; // A4 page height in mm
        const headerHeight = 20; // Header height in mm
        const footerHeight = 80; // Footer height in mm

        const totalPages = Math.ceil(canvas.height / (pageHeight - headerHeight - footerHeight));

        const pages: HTMLCanvasElement[] = [];

        for (let i = 0; i < totalPages; i++) {
          const PAGE_CANVAS: HTMLCanvasElement = document.createElement('canvas');
          const pageContext = PAGE_CANVAS.getContext('2d');

          if (pageContext) {
            PAGE_CANVAS.width = canvas.width;
            PAGE_CANVAS.height = pageHeight;

            const startY = i * (pageHeight - headerHeight - footerHeight);
            const endY = Math.min((i + 1) * (pageHeight - headerHeight - footerHeight), canvas.height);
            const height = endY - startY;

            pageContext.drawImage(canvas, 0, startY, canvas.width, height, 0, 0, canvas.width, height);

            pages.push(PAGE_CANVAS);
          }
        }

        resolve(pages);
      });
    });
  }

  private generatePDF(pages: HTMLCanvasElement[]) {
    const fileWidth = 600; // A4 page width in mm
    const headerHeight = 20; // Header height in mm
    const footerHeight = 10; // Footer height in mm
    const PDF = new jsPDF('p', 'mm', 'a4');
    for (let i = 0; i < pages.length; i++) {
      const canvas = pages[i];
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      if (i > 0) {
        PDF.addPage();
      }
      const pageHeight = fileHeight - headerHeight - footerHeight; // Adjust for header and footer
      const footerY = pageHeight + headerHeight; // Position the footer at the bottom of the page
      PDF.addImage(FILEURI, 'PNG', 0, headerHeight, fileWidth, pageHeight);
      PDF.text('Nimap Infotech', 100, 10); // Header content
      PDF.text('LLP Baniya', 100, footerY - 2); // Footer content
    }
    PDF.save('angular-demo.pdf');
  }
}
