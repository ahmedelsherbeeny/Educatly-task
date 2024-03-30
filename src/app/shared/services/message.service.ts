import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }


  popup(title: string, message: string, icon: SweetAlertIcon = "info",retryCallback?: () => void) {
    return Swal.fire({
      title: title,
      text: message,
      icon: icon,
      background: "#fff",
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: "Retry",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: `btn btn-outline-primary btn-sm`,
        cancelButton: `btn btn-outline-secondary btn-sm ms-2`,
      },   preConfirm: () => {
        if (retryCallback) {
          retryCallback();
        }
      }
    },);
  }

  toast(message: string, icon: SweetAlertIcon = "info") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: "#fff",
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: message,
    });
  }
}
