import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';

const useUndoRedoCHanges = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const KeyPress = (event: any) => {
			const { keyCode, ctrlKey } = event;

			if (ctrlKey) {
				switch (keyCode) {
					case 26:
						dispatch(ActionCreators.undo());
						break;
					case 25:
						dispatch(ActionCreators.redo());
						break;
				}
			}
		};

		document.addEventListener('keypress', KeyPress);

		return () => document.removeEventListener('keypress', KeyPress);
	}, []);
};

export { useUndoRedoCHanges };
