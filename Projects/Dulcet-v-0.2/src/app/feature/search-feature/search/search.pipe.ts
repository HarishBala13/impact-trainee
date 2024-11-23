/*
 Programmer: HarishBala13
 Date: Tue, Oct 15, 2024  8:52:25 PM
*/
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(items: string[], searchString: string): string[] {
    if(!items) return[];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();
    return items.filter(item => item.toLowerCase().includes(searchString));
  }
}

// export class SearchFilterPipe implements PipeTransform {
//   transform(keywords: any, searchString?: any):any {
//     if(keywords.length === 0 || searchString === ''){
//       return keywords;
//     }
//     else{
//       return keywords.filter((result:any) => {
//         return result.artistName.toLowerCase() === searchString?.toLowerCase();
//       })
//     }
//   }
// }
