	addRequest(message: IParsedChatRequest, variableData: IChatRequestVariableData, attempt: number, modeInfo?: IChatRequestModeInfo, chatAgent?: IChatAgentData, slashCommand?: IChatAgentCommand, confirmation?: string, locationData?: IChatLocationData, attachments?: IChatRequestVariableEntry[], isCompleteAddedRequest?: boolean, modelId?: string, userSelectedTools?: UserSelectedTools, id?: string): ChatRequestModel {
		const editedFileEvents = [...this.currentEditedFileEvents.values()];
		this.currentEditedFileEvents.clear();
		const request = new ChatRequestModel({
			restoredId: id,
			session: this,
			message,
			variableData,
		} else if (progress.kind === 'move') {
			this._onDidChange.fire({ kind: 'move', target: progress.uri, range: progress.range });
		} else if (progress.kind === 'codeblockUri' && progress.isEdit) {
			request.response.addUndoStop({ id: progress.undoStopId ?? generateUuid(), kind: 'undoStop' });
			request.response.updateContent(progress, quiet);
		} else if (progress.kind === 'progressTaskResult') {
			// Should have been handled upstream, not sent to model
			// Maybe something went wrong?
			return;
		}
		request.response.setFollowups(followups);
	}
