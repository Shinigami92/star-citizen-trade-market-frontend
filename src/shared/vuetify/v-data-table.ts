export interface VDataTablePagination {
	descending?: boolean;
	page?: number;
	rowsPerPage?: number;
	sortBy?: string;
	totalItems?: number;
}

export interface VDataTableHeader {
	text: string;
	value: string;
	align?: 'left' | 'center' | 'right';
	sortable?: boolean;
	class?: string[] | string;
	width?: string;
}
