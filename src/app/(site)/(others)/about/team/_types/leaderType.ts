export interface HistoryItem {
	organization: string;
	role: string;
	startDate: number | string; // Some are 2013, some are "Current"
	location?: string; // Optional because not all items have it
	description: string;
	keyStats?: string[]; // Optional
}

export interface LeaderImage {
	image: string;
	title: string;
}

export interface Leader {
	name: string;
	intro: React.ReactNode; // Handles the JSX/<> </> content
	sectionTitle: string;
	sectionSubtitle: string;
	images: LeaderImage[];
	history: HistoryItem[];
}

export type LeadersDataMap = Record<string, Leader>;
