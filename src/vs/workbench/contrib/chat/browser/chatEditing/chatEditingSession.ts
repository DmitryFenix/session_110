function createOpeningEditCodeBlock(uri: URI, isNotebook: boolean, undoStopId: string): IChatProgress[] {
	return [
		{
			kind: 'markdownContent',
		{
			kind: 'codeblockUri',
			uri,
			isEdit: true,
			undoStopId
		},
		{
			kind: 'markdownContent',
		};
	}

	async startExternalEdits(responseModel: IChatResponseModel, operationId: number, resources: URI[], undoStopId: string): Promise<IChatProgress[]> {
		const snapshots = new ResourceMap<string | undefined>();
		const acquiredLockPromises: DeferredPromise<void>[] = [];
		const releaseLockPromises: DeferredPromise<void>[] = [];
		const progress: IChatProgress[] = [];
		const telemetryInfo = this._getTelemetryInfoForModel(responseModel);

		await chatEditingSessionIsReady(this);


				const notebookUri = CellUri.parse(resource)?.notebook || resource;
				progress.push(...createOpeningEditCodeBlock(resource, this._notebookService.hasSupportedNotebooks(notebookUri), undoStopId));

				// Save to disk to ensure disk state is current before external edits
				await entry?.save();