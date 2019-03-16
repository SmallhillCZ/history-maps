import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  center:BehaviorSubject<[number,number]> = new BehaviorSubject([14.41, 50.08] as [number,number]);

  constructor() { }
}
