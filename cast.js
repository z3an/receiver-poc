const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

playerManager.setMessageInterceptor(
    cast.framework.messages.MessageType.LOAD, loadRequestData => {
    //     if (loadRequestData.media && loadRequestData.media.entity) {
            document.getElementById('auth').innerHTML = loadRequestData.credentials;
    //         return thirdparty
    //             .getMediaById(
    //                 loadRequestData.media.entity, loadRequestData.credentials)
    //             .then(media => {
    //                 if (media) {
    //                     loadRequestData.media.contentId = media.url;
    //                     loadRequestData.media.contentType = media.contentType;
    //                     loadRequestData.media.metadata = media.metadata;
    //                 }
    //                 return loadRequestData;
    //             });
    //     }
    //     return loadRequestData;
        document.getElementById('auth').innerHTML = loadRequestData.credentials;
        return null;
    });

context.start();