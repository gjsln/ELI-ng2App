import { Pipe } from '@angular/core';

@Pipe({
    name: 'SearchPipe'
})

export class SearchPipe {
    
    transform(value:any[], queryString:any): any{
                
        if (queryString !== undefined) {
            return value.filter(item => item.fname.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
        } else {
            return value;
        }
    }
}