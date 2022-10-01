import React, { FC } from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';

type T_Props = {};

const Header: FC<T_Props> = () => {
	return (
		<SectionHeader
			showBackButton
			hideTopBorder
		>
			Header Design
		</SectionHeader>
	);
};

export { Header };
