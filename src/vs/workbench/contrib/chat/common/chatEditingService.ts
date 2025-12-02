	startExternalEdits(responseModel: IChatResponseModel, operationId: number, resources: URI[], undoStopId: string): Promise<IChatProgress[]>;
	stopExternalEdits(responseModel: IChatResponseModel, operationId: number): Promise<IChatProgress[]>;

	/**