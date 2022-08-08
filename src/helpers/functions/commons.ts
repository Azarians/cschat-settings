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
		'77%',
		'80%',
		'Manage Chat',
		onClose,
		false
	);
};

export { openReviewModal, openBillingPage, openDashboard };
