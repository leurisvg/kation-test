import { Component } from '@angular/core';

@Component({
	selector: 'app-user-icon',
	template: `
		<div class="d-flex align-items-center justify-content-center">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd"
				      d="M11.9973 13.8928C8.98939 13.8928 6.55096 11.4543 6.55096 8.44638C6.55096 5.43843 8.98939 3 11.9973 3C15.0053 3 17.4437 5.43843 17.4437 8.44638C17.4437 11.4543 15.0053 13.8928 11.9973 13.8928ZM11.9973 12.0773C14.0026 12.0773 15.6283 10.4517 15.6283 8.44638C15.6283 6.44108 14.0026 4.81546 11.9973 4.81546C9.99204 4.81546 8.36642 6.44108 8.36642 8.44638C8.36642 10.4517 9.99204 12.0773 11.9973 12.0773ZM3.01036 21.1501C2.51152 21.2 2.06669 20.836 2.01681 20.3372C2.01365 20.3043 2.01104 20.2708 2.00826 20.2195C1.96603 19.4398 2.07969 18.5155 2.48939 17.6051C3.27437 15.8607 4.91762 14.8005 7.45869 14.8005H16.5417C19.0802 14.8005 20.7228 15.8606 21.5086 17.6046C21.9193 18.516 22.0336 19.4409 21.992 20.2203C21.9893 20.2707 21.9867 20.3037 21.9837 20.3361C21.9344 20.835 21.49 21.1995 20.9911 21.1502C20.4924 21.101 20.1279 20.6568 20.1769 20.1581C20.1772 20.1547 20.1782 20.1405 20.1791 20.1234C20.2066 19.6082 20.1259 18.9551 19.8535 18.3505C19.3611 17.2578 18.3666 16.616 16.5417 16.616H12.0038H7.45869C5.63131 16.616 4.63647 17.2578 4.14495 18.3501C3.87334 18.9536 3.79314 19.6058 3.82107 20.1214C3.82201 20.1388 3.82305 20.1535 3.8233 20.1569C3.87296 20.6556 3.50907 21.1002 3.01036 21.1501Z"
				      fill="#273F70"/>
				<mask id="mask0_0_178" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="3" width="20" height="19">
					<path fill-rule="evenodd" clip-rule="evenodd"
					      d="M11.9973 13.8928C8.98939 13.8928 6.55096 11.4543 6.55096 8.44638C6.55096 5.43843 8.98939 3 11.9973 3C15.0053 3 17.4437 5.43843 17.4437 8.44638C17.4437 11.4543 15.0053 13.8928 11.9973 13.8928ZM11.9973 12.0773C14.0026 12.0773 15.6283 10.4517 15.6283 8.44638C15.6283 6.44108 14.0026 4.81546 11.9973 4.81546C9.99204 4.81546 8.36642 6.44108 8.36642 8.44638C8.36642 10.4517 9.99204 12.0773 11.9973 12.0773ZM3.01036 21.1501C2.51152 21.2 2.06669 20.836 2.01681 20.3372C2.01365 20.3043 2.01104 20.2708 2.00826 20.2195C1.96603 19.4398 2.07969 18.5155 2.48939 17.6051C3.27437 15.8607 4.91762 14.8005 7.45869 14.8005H16.5417C19.0802 14.8005 20.7228 15.8606 21.5086 17.6046C21.9193 18.516 22.0336 19.4409 21.992 20.2203C21.9893 20.2707 21.9867 20.3037 21.9837 20.3361C21.9344 20.835 21.49 21.1995 20.9911 21.1502C20.4924 21.101 20.1279 20.6568 20.1769 20.1581C20.1772 20.1547 20.1782 20.1405 20.1791 20.1234C20.2066 19.6082 20.1259 18.9551 19.8535 18.3505C19.3611 17.2578 18.3666 16.616 16.5417 16.616H12.0038H7.45869C5.63131 16.616 4.63647 17.2578 4.14495 18.3501C3.87334 18.9536 3.79314 19.6058 3.82107 20.1214C3.82201 20.1388 3.82305 20.1535 3.8233 20.1569C3.87296 20.6556 3.50907 21.1002 3.01036 21.1501Z"
					      fill="white"/>
				</mask>
				<g mask="url(#mask0_0_178)">
				</g>
			</svg>
		</div>
	`,
	styles: [ `
    div
      height: 36px
      width: 36px
      border-radius: 50%
      background-color: #FFFFFF
      border: 1px solid #DFDFDF
      margin-right: 12px
	` ],
})
export class UserIconComponent {
}
