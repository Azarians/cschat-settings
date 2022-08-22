import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { requestSettingsUpdate } from '../helpers/functions/settings';
import { selectChatId } from '../store/reducers/chat/selectors';
import { selectSettings } from '../store/reducers/settings/selectors';

let isOnInitialLoad = true;

const useSettingsAutoSave = () => {
	const settings = useSelector(selectSettings);
	const chatId = useSelector(selectChatId);

	useEffect(() => {
		if (chatId && !isOnInitialLoad) {
			requestSettingsUpdate(settings);
		}
		isOnInitialLoad = false;
	}, [settings, chatId]);
};

export { useSettingsAutoSave };
