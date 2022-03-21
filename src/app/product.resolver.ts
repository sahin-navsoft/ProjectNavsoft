import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {
  constructor(private userService: UserDataService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log(Observable);

    return this.userService.get1Request();
  }
}
