import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if (arg === '' || arg.length < 3) return value;
    
    const resultPosts = [];
    for (const post of value) {
      const nombre = post.nombres+" "+post.apellidoPaterno;
      const nombreCompleto = post.nombres+" "+post.apellidoPaterno+" "+post.apellidoMaterno;
      
      if(nombreCompleto == arg)
      {
        resultPosts.push(post);
      };
      
      if(nombre == arg)
      {
        resultPosts.push(post);
      };

      if (post.nombres == arg) {
        resultPosts.push(post);
      };

      if (post.apellidoPaterno == arg) {
        resultPosts.push(post);
      };

      if (post.apellidoMaterno == arg) {
        resultPosts.push(post);
      };

      if (post.rut== arg) {
        resultPosts.push(post);
      };

    };
    return resultPosts;

  }
}