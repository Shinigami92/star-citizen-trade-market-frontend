export interface VuetifyTableHeader {
	text: string;
	value: string;
	align?: 'start' | 'center' | 'end';
	sortable?: boolean;
	filterable?: boolean;
	divider?: boolean;
	class?: string | string[];
	width?: string | number;
	filter?: (value: any, search: string, item: any) => boolean;
	sort?: (a: any, b: any) => number;
}
