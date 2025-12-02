		undoStopId?: string;
		constructor(value: Uri, isEdit?: boolean, undoStopId?: string);
	}

	/**
	export class ChatResponseExternalEditPart {
		uris: Uri[];
		callback: () => Thenable<unknown>;
		applied: Thenable<string>;
		constructor(uris: Uri[], callback: () => Thenable<unknown>);
	}

		 * tracked as agent edits. This can be used to track edits made from
		 * external tools that don't generate simple {@link textEdit textEdits}.
		 */
		externalEdit(target: Uri | Uri[], callback: () => Thenable<unknown>): Thenable<string>;

		markdownWithVulnerabilities(value: string | MarkdownString, vulnerabilities: ChatVulnerability[]): void;
		codeblockUri(uri: Uri, isEdit?: boolean): void;