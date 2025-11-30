	applied: Thenable<string>;
	didGetApplied!: (value: string) => void;

	constructor(
		public uris: vscode.Uri[],
		public callback: () => Thenable<unknown>,
	) {
		this.applied = new Promise<string>((resolve) => {
			this.didGetApplied = resolve;
		});
	}

export class ChatResponseCodeblockUriPart {
	isEdit?: boolean;
	undoStopId?: string;
	value: vscode.Uri;
	constructor(value: vscode.Uri, isEdit?: boolean, undoStopId?: string) {
		this.value = value;
		this.isEdit = isEdit;
		this.undoStopId = undoStopId;
	}
}

		readonly references: vscode.ChatPromptReference[],
		readonly participant: string,
		readonly toolReferences: vscode.ChatLanguageModelToolReference[],
		readonly editedFileEvents?: vscode.ChatRequestEditedFileEvent[],
		readonly id?: string
	) { }
}
