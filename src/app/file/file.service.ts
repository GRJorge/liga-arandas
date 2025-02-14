import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  createFormData(event: Event, name: string): FormData {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const formData: FormData = new FormData();
      formData.append(name, file);
      return formData;
    } else {
      throw new Error('not file exist');
    }
  }
}
