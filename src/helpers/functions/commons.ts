const openReviewModal = window.Wix.Settings.openReviewInfo;

const openBillingPage = window.Wix.Settings.openBillingPage;

const openDashboard = ({
	urlParams,
	onClose
}: {
	urlParams: { [key: string]: string };
	onClose?: () => void;
}) => {
	let params = '';
	for (let i in urlParams) {
		params += `${i}=${urlParams[i]}&`;
	}
	window.Wix.Settings.openModal(
		`${process.env.REACT_APP_DASHBOARD_URL}?${params}`,
		'90%',
		'80%',
		'Manage Tukse Chat',
		onClose,
		false
	);
};

const openFeedbackModal = () => {
	window.Wix.Settings.openModal(
		`${process.env.REACT_APP_FEEDBACK_MODAL_URL}`,
		'77%',
		'80%',
		'Feedback about Tukse Chat',
		() => {},
		false
	);
};

const isObject = (object: any) => object != null && typeof object === 'object';

const mergeDeep = (target: any, ...sources: any): object => {
	if (!sources.length) return target;
	const source: any = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
};

export { openReviewModal, openBillingPage, openDashboard, openFeedbackModal, mergeDeep };
