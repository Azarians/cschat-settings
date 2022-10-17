const openReviewModal = window.Wix.Settings.openReviewInfo;

const openBillingPage = window.Wix.Settings.openBillingPage;

const getSiteMap = window.Wix.getSiteMap;

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

export { openReviewModal, openBillingPage, openDashboard, openFeedbackModal, getSiteMap };
