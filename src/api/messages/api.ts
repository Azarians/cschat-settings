import { T_SiteId } from '../../helpers/types/commons';

const R_getMessages = (sid: T_SiteId) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}messages?&sid=${sid}`).then((res) => res.json());
};

export { R_getMessages };
