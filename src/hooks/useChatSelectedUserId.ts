import { useParams } from 'react-router-dom';

const useCHatSelectedUserId = () => {
	const params = useParams();

	return params.uid;
};

export { useCHatSelectedUserId };
