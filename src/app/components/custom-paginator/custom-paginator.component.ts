import { ChangeDetectorRef, Component, Inject, Optional, AfterViewChecked } from '@angular/core';

import {
	MatPaginatorDefaultOptions,
	MAT_PAGINATOR_DEFAULT_OPTIONS,
	MatPaginatorIntl,
	_MatPaginatorBase,
} from '@angular/material/paginator';

@Component({
	selector: 'app-custom-paginator',
	templateUrl: './custom-paginator.component.html',
	styleUrls: [ './custom-paginator.component.sass' ],
})
export class CustomPaginatorComponent extends _MatPaginatorBase<MatPaginatorDefaultOptions> implements AfterViewChecked {

	constructor(
		private cdRef: ChangeDetectorRef,
		intl: MatPaginatorIntl,
		changeDetectorRef: ChangeDetectorRef,
		@Optional() @Inject(MAT_PAGINATOR_DEFAULT_OPTIONS) defaults?: MatPaginatorDefaultOptions,
	) { super(intl, changeDetectorRef, defaults); }

	paginator: string = '';

	ngAfterViewChecked(): void {
		this.paginator = this.paginatorInfo();
		this.cdRef.detectChanges();
	}

	paginatorInfo(): string {
		if (!this.hasPreviousPage()) {
			return `${ this.pageIndex + 1 } - ${ this.pageSize } de ${ this.length }`;
		} else if (this.hasPreviousPage() && this.hasNextPage()) {
			return `${ (this.pageIndex * this.pageSize) + 1 } - ${ (this.pageIndex + 1) * this.pageSize } de ${ this.length }`;
		} else {
			return `${ (this.pageIndex * this.pageSize) + 1 } - ${ this.length } de ${ this.length }`;
		}
	}
}
