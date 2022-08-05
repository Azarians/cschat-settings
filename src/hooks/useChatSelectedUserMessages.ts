import { useSelector } from 'react-redux';
import { selectSelectedUserMessages } from '../store/reducers/messages/selectors';
import { useCHatSelectedUserId } from './useChatSelectedUserId';

const useChatSelectedUserMessages = () => {
	const selectedUId = useCHatSelectedUserId();
	const messages = useSelector(
		selectSelectedUserMessages(String(selectedUId), '62ea57f88c8e05124b2b9b4b')
	);
	if (!selectedUId) return;

	return messages;
};

export { useChatSelectedUserMessages };
