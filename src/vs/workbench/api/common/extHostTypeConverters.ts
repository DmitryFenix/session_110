			undoStopId: part.undoStopId
		};
	}
	export function to(part: Dto<IChatResponseCodeblockUriPart>): vscode.ChatResponseCodeblockUriPart {
		return new types.ChatResponseCodeblockUriPart(URI.revive(part.uri), part.isEdit, part.undoStopId);
	}
}
