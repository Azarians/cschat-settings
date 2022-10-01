import React, { FC } from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';

type T_Props = {};

const Messages: FC<T_Props> = () => {
	return (
		<SectionHeader
			showBackButton
			hideTopBorder
		>
			Messages Design
		</SectionHeader>
	);
};

export { Messages };
