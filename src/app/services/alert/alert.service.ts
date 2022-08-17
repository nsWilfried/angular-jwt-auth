import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  showSuccessAlert(title: string, message: string) {
    return Swal.fire(title, message, "success");
  }

  showErrorAlert(title: string, message: string) {
    return Swal.fire(title, message, "error");
  }

  
  showDeleteAlert(title: string, message: string) {
    return Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, Supprimer!",
      cancelButtonText: "Non",
    });
  }

  setInputAlert(title: string, message: string, action : string ) {
    return Swal.fire({
      title: title,
      input: "number",
      showCancelButton: true,
      confirmButtonText: action,
      confirmButtonColor: "#3085d6",
      customClass: 'swal-wide',
      showLoaderOnConfirm: true,
      cancelButtonText: "Annuler",
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
}
