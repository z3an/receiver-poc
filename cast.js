const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

const brainUrl = 'https://53be7f95.ngrok.io'

playerManager.setMessageInterceptor(
    cast.framework.messages.MessageType.LOAD, loadRequestData => {
        console.log(loadRequestData);
    //     if (loadRequestData.media && loadRequestData.media.entity) {
    //         document.getElementById('auth').innerHTML = loadRequestData.credentials;
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
        const params = {
            access_token: loadRequestData.credentials
        };
        axios.get(brainUrl + '/sync/acquire', params).then((data) => {
            if (data.success) document.getElementById('auth').innerHTML = data.session ? data.date : data.message;
        }).catch((err) => {
            document.getElementById('auth').innerHTML = 'Login failed';
        });
        return null;
    });

context.start();