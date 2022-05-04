import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CustomPaginatorComponent } from '../custom-paginator/custom-paginator.component';

import { ClientAddress } from '../../interfaces/client-address.interface';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.sass' ],
})
export class TableComponent implements OnInit, AfterViewInit {

	displayedColumns: string[] = [ 'location', 'person', 'residence', 'street', 'number', 'section', 'province', 'state' ];
	dataSource?: MatTableDataSource<ClientAddress>;

	@Input() data!: ClientAddress[];

	ngOnInit(): void {
		this.dataSource = new MatTableDataSource(this.data);
	}

	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(CustomPaginatorComponent, { static: true }) paginator!: CustomPaginatorComponent;
	arrowDirection: string | null = null;

	ngAfterViewInit() {
		this.dataSource!.sort = this.sort;
		this.paginator.pageSize = 10;
		this.dataSource!.paginator = this.paginator;
	}

	sortIcon(row: string) {

		if (this.sort && this.sort.active === row) {

			if (this.sort.direction === 'asc') {
				this.arrowDirection = 'asc';
			} else if (this.sort.direction === 'desc') {
				this.arrowDirection = 'desc';
			} else {
				this.arrowDirection = null;
			}

		} else {
			this.arrowDirection = null;
		}
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource!.filter = filterValue.trim().toLowerCase();

		if (this.dataSource!.paginator) {
			this.dataSource!.paginator.firstPage();
		}
	}
}
