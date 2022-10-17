export type T_SitePage = {
	hidden: boolean;
	isHomePage: boolean;
	pageId: string;
	title: string;
	type: string;
	url: string;
	subPages?: T_SitePage[];
};

export type T_SiteMap = T_SitePage[];
