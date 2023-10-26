import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TranslatearabicPipe } from './pipes/translatearabic.pipe';
import { ExportPdfDirective } from './directive/export/export-pdf.directive';
import { PreviewPdfDirective } from './directive/preview/preview-pdf.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    TranslatearabicPipe,
    ExportPdfDirective,
    PreviewPdfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
