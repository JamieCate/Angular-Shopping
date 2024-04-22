import { Directive, HostListener, Renderer2, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor(public renderer: Renderer2, public elementRef: ElementRef) {

    }
    @HostListener('click') 
    toggleMenu() {
        this.elementRef.nativeElement.classList.toggle('open');
    }
}