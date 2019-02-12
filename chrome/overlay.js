'use strict';

var iframeParent = document.getElementsByClassName('punch-viewer-content');
var iframe = document.createElement('iframe');
iframe.setAttribute('id', 'feedback-overlay');
iframe.setAttribute('src', 'https://feedback.firebaseapp.com/reactions.html');
iframe.setAttribute('seamless', 'seamless');
iframeParent[0].appendChild(iframe);
