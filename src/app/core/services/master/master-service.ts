import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GLOBAL_CONSTANTS } from '../../constants/global.constant';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  getProducts() {
    return this.http.get(
      `${environment.API_URL}${GLOBAL_CONSTANTS.API_ENPOINTS.MASTERS.GET_PARENT_CATEGORIES}`,
    );
  }
}
