	undoStopId: string;
	start: boolean; /** true=start, false=stop */
	resources: UriComponents[];
}
	kind: 'codeblockUri';
	uri: URI;
	isEdit?: boolean;
	undoStopId?: string;
}

export interface IChatAgentMarkdownContentWithVulnerability {