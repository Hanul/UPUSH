UPUSH.ANDROID_PUSH=METHOD(function(){"use strict";var e,i=require("node-gcm");return void 0!==NODE_CONFIG.UPUSH&&void 0!==NODE_CONFIG.UPUSH.android&&(e=new i.Sender(NODE_CONFIG.UPUSH.android.serverKey)),{run:function(n){var o=n.regId,t=new i.Message({delayWhileIdle:!1,timeToLive:1800,data:{title:n.title,message:n.message}});e.send(t,[o],5,function(e,i){})}}}),UPUSH.IOS_PUSH=METHOD(function(){"use strict";var e,i=require("apn");return void 0!==NODE_CONFIG.UPUSH&&void 0!==NODE_CONFIG.UPUSH.ios&&(e=new i.Connection({cert:NODE_CONFIG.UPUSH.ios.certFilePath,key:NODE_CONFIG.UPUSH.ios.keyFilePath,production:CONFIG.isDevMode!==!0,passphrase:NODE_CONFIG.UPUSH.ios.password})),{run:function(n){var o=n.token,t=new i.Device(o),a=new i.Notification;a.badge=n.badge,a.sound=n.sound,a.alert=n.message,a.payload=void 0===n.data?{}:n.data,e.pushNotification(a,t)}}});