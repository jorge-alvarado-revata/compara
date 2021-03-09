import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML'
})
export class SafeHTMLPipe {
    constructor(private sanitizer:DomSanitizer){}

    transform(html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
      }

}
