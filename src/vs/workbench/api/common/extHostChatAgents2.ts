					const undoStopId = generateUuid();
					await send({ kind: 'externalEdits', start: true, resources, undoStopId }, operationId);
					try {
						await callback();
						return undoStopId;
					} finally {
						await send({ kind: 'externalEdits', start: false, resources, undoStopId }, operationId);
					}
				},
				confirmation(title, message, data, buttons) {
						return this;
					} else if (part instanceof extHostTypes.ChatResponseExternalEditPart) {
						const p = this.externalEdit(part.uris, part.callback);
						p.then((value) => part.didGetApplied(value));
						return this;
					} else {
						const dto = typeConvert.ChatResponsePart.from(part, that._commandsConverter, that._sessionDisposables);
			}

			const editedFileEvents = isProposedApiEnabled(extension, 'chatParticipantPrivate') ? h.request.editedFileEvents : undefined;
			const turn = new extHostTypes.ChatRequestTurn(h.request.message, h.request.command, varsWithoutTools, h.request.agentId, toolReferences, editedFileEvents, h.request.requestId);
			res.push(turn);

			// RESPONSE turn