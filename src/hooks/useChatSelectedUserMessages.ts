import { useSelector } from 'react-redux';
import { selectSelectedUserMessages } from '../store/reducers/messages/selectors';
import { useCHatSelectedUserId } from './useChatSelectedUserId';

const useChatSelectedUserMessages = () => {
	const selectedUId = useCHatSelectedUserId();
	const messages = useSelector(selectSelectedUserMessages(String(selectedUId)));
	if (!selectedUId) return;

	return messages;
};

export { useChatSelectedUserMessages };
