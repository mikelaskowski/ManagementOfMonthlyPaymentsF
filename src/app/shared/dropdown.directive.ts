import { Directive, ElementRef, OnInit, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class Dropdown implements OnInit{
@HostBinding('class.open') isRolledDown = false;

constructor(private elementRef: ElementRef, private renderer:Renderer2){}

@HostListener('click') toggleDropdownMenu(){

this.isRolledDown=!this.isRolledDown;

console.log(this.isRolledDown);

}

ngOnInit(){
    console.log(this.elementRef);
    console.log(this.isRolledDown);
}

}