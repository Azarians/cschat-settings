import React, { FC } from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';

type T_Props = {};

const MinimizedChat: FC<T_Props> = () => {
	return (
		<SectionHeader
			showBackButton
			hideTopBorder
		>
			Minimizes Chat Design
		</SectionHeader>
	);
};

export { MinimizedChat };
