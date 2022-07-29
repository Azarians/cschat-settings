const combineClassNames = (...classNames: string[]) => {
	let className = '';
	for (let i of classNames) {
		if (typeof i !== 'string') continue;
		className += ` ${i}`;
	}

	return className;
};

export { combineClassNames };
