import { Injectable, EventEmitter } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class SharedService {
    constructor() { }
    itemAdded = new EventEmitter();
}