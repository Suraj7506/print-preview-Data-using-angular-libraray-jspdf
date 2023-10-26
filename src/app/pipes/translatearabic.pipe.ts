import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatearabic'
})
export class TranslatearabicPipe implements PipeTransform {
  transform(value: string): string {
    // You can add Arabic translations here or use a translation service
    const translations: { [key: string]: string } = {
      'Company Name': 'اسم الشركة',
      'Company Address': 'عنوان الشركة',
      'Journal de caisse MyOrders du 01/01/2020': 'سجل النقد لـ MyOrders في 01/01/2020',
      'No.': 'رقم',
      'FirstName': 'الاسم الأول',
      'Last Name': 'الاسم الأخير',
      'tva repartition on PAYGREEN payment': 'توزيع ضريبة القيمة المضافة على دفعة PAYGREEN',
    };

    return translations[value] || value;
  }

}
