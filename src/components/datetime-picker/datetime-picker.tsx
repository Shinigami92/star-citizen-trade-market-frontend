import { ofType } from 'vue-tsx-support';
// @ts-ignore
import DatetimePicker from 'vuetify-datetime-picker/src/components/DatetimePicker';

export default ofType<Props, Events, ScopedSlots>().convert(DatetimePicker as any);

interface Props {
	'v-model': any;
	datetime?: Date | string;
	disabled?: boolean;
	label: string;
	width?: number;
	format?: string;
	timePickerFormat?: 'ampm' | '24hr';
	locale?: string;
	okText?: string;
	clearText?: string;
	loading?: boolean;
	errorMessages?: string | string[];
	errorCount?: number | string;
	error?: boolean;
	hideDetails?: boolean;
	appendIcon?: string;
	prependIcon?: string;
}

interface Events {
	onInput?: Date | string;
}

interface ScopedSlots {
	dateIcon?: any;
	timeIcon?: any;
	actions?: any;
}
