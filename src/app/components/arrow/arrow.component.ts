import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-arrow',
	template: `
		<svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd"
			      d="M6.35147 4.04853C5.88284 3.5799 5.88284 2.8201 6.35147 2.35147C6.8201 1.88284 7.5799 1.88284 8.04853 2.35147L16.8485 11.1515C17.3172 11.6201 17.3172 12.3799 16.8485 12.8485L8.04853 21.6485C7.5799 22.1172 6.8201 22.1172 6.35147 21.6485C5.88284 21.1799 5.88284 20.4201 6.35147 19.9515L14.3029 12L6.35147 4.04853Z"
			      [attr.fill]="color"/>
			<mask id="mask0_0_197" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="2" width="12" height="20">
				<path fill-rule="evenodd" clip-rule="evenodd"
				      d="M6.35147 4.04853C5.88284 3.5799 5.88284 2.8201 6.35147 2.35147C6.8201 1.88284 7.5799 1.88284 8.04853 2.35147L16.8485 11.1515C17.3172 11.6201 17.3172 12.3799 16.8485 12.8485L8.04853 21.6485C7.5799 22.1172 6.8201 22.1172 6.35147 21.6485C5.88284 21.1799 5.88284 20.4201 6.35147 19.9515L14.3029 12L6.35147 4.04853Z"
				      [attr.fill]="color"/>
			</mask>
			<g mask="url(#mask0_0_197)">
			</g>
		</svg>
	`,
	styles: [],
})
export class ArrowComponent {
	@Input() size: number = 15;
	@Input() color: string = 'white';
}
