import React, { FC } from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';

type T_Props = {};

const Container: FC<T_Props> = () => {
	return (
		<SectionHeader
			showBackButton
			hideTopBorder
		>
			Container Design
		</SectionHeader>
	);
};

export { Container };
