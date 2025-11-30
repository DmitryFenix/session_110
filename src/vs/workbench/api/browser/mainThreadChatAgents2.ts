						? await chatSession.editingSession.startExternalEdits(response, responsePartHandle, revive(progress.resources), progress.undoStopId)
						: await chatSession.editingSession.stopExternalEdits(response, responsePartHandle);
					chatProgressParts.push(...parts);
				}