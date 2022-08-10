import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChatId } from '../store/reducers/chat/selectors';
import { selectSettings } from '../store/reducers/settings/selectors';
import { updateSettingsRequested } from '../store/sagas/settings/actionCreators';

const useSettingsAutoSave = () => {
	const settings = useSelector(selectSettings);
	const chatId = useSelector(selectChatId);
	const dispatch = useDispatch();

	useEffect(() => {
		chatId && dispatch(updateSettingsRequested({ settings, chatId }));
	}, [settings, chatId]);
};

export { useSettingsAutoSave };
