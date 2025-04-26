import { Subject } from "rxjs";

export class SubjectManajer {
    Subject$ = new Subject();

    getSubject$(){
        return this.Subject$.asObservable();
    }

    setSubject$(value){
        this.Subject$.next(value);
    }
}