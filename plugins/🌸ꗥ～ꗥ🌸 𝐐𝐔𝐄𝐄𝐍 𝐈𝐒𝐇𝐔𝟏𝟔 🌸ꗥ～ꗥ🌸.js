/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu

*/

function _0x4f87(){const _0x4f5745=['12104MIlLOP','../config','status','9490zDmsbJ','7wcqhch','form-data','test','sendMessage','291QbsEQx','24SanTVf','axios','1345377QrYHJf','*❌\x20REQUEST\x20ERROR!!*\x0a\x0a>\x20*Reply/Send\x20an\x20Image\x20or\x20Video\x20with\x20Caption\x20`.url`*','847445yqdJKQ','url','9046WPUKOp','../command','78aCycfE','*✅\x20SUCCESSFUL\x20UPLOAD!*\x0a\x0a🔗\x20*DIRECT\x20LINK:*\x0a','Upload\x20file\x20and\x20get\x20direct\x20link','file','downloadAndSaveMediaMessage','6DTaSNG','606152pyzuYO','error','429AsNKcv','918wJRYcu','result','filelink','*❌\x20An\x20Error\x20Occurred\x20While\x20Processing\x20Your\x20Request.*','unlinkSync','*❌\x20Failed\x20to\x20upload\x20the\x20file\x20or\x20retrieve\x20the\x20link.*','183778BCwaAe'];_0x4f87=function(){return _0x4f5745;};return _0x4f87();}function _0x2f36(_0x66cee9,_0x576cc4){const _0x4f8784=_0x4f87();return _0x2f36=function(_0x2f3692,_0x50b564){_0x2f3692=_0x2f3692-0x117;let _0x583257=_0x4f8784[_0x2f3692];return _0x583257;},_0x2f36(_0x66cee9,_0x576cc4);}const _0x4f4dfa=_0x2f36;(function(_0x4685b1,_0x3a5006){const _0x2345e2=_0x2f36,_0x57dbc4=_0x4685b1();while(!![]){try{const _0x414c71=-parseInt(_0x2345e2(0x137))/0x1*(parseInt(_0x2345e2(0x118))/0x2)+-parseInt(_0x2345e2(0x130))/0x3*(parseInt(_0x2345e2(0x128))/0x4)+parseInt(_0x2345e2(0x135))/0x5*(parseInt(_0x2345e2(0x11d))/0x6)+-parseInt(_0x2345e2(0x12c))/0x7*(-parseInt(_0x2345e2(0x11e))/0x8)+-parseInt(_0x2345e2(0x121))/0x9*(parseInt(_0x2345e2(0x12b))/0xa)+-parseInt(_0x2345e2(0x133))/0xb*(-parseInt(_0x2345e2(0x131))/0xc)+parseInt(_0x2345e2(0x120))/0xd*(parseInt(_0x2345e2(0x127))/0xe);if(_0x414c71===_0x3a5006)break;else _0x57dbc4['push'](_0x57dbc4['shift']());}catch(_0x3ecdb2){_0x57dbc4['push'](_0x57dbc4['shift']());}}}(_0x4f87,0x2beed));const config=require(_0x4f4dfa(0x129)),{cmd,commands}=require(_0x4f4dfa(0x117)),axios=require(_0x4f4dfa(0x132)),fs=require('fs'),FormData=require(_0x4f4dfa(0x12d));cmd({'pattern':_0x4f4dfa(0x136),'alias':['upload',_0x4f4dfa(0x123)],'desc':_0x4f4dfa(0x11a),'react':'🔗','category':_0x4f4dfa(0x11b),'filename':__filename},async(_0x13f213,_0x4e63ee,_0x28c61c,{from:_0x3a5a62,quoted:_0x3ce020,body:_0x44e42a,isCmd:_0x52e7f6,command:_0x3ee823,args:_0x3e560e,q:_0x26cb6b,isGroup:_0x1e806e,sender:_0x14a3fd,senderNumber:_0x5eefcd,botNumber2:_0x263e52,botNumber:_0x14e624,pushname:_0x3e7d2c,isMe:_0xf35d1a,isOwner:_0x34859c,groupMetadata:_0x2cffc3,groupName:_0x395dda,participants:_0x34a98d,groupAdmins:_0x70bbba,isBotAdmins:_0x5a80b4,isAdmins:_0x681daa,reply:_0x577463})=>{const _0x53245c=_0x4f4dfa;try{if(!/video/[_0x53245c(0x12e)](_0x44e42a)&&!/image/[_0x53245c(0x12e)](_0x44e42a))return _0x577463('*❌\x20REQUEST\x20ERROR!!*\x0a\x0a>\x20*Reply/Send\x20an\x20Image\x20or\x20Video\x20with\x20Caption\x20`.url`*');await _0x13f213[_0x53245c(0x12f)](_0x3a5a62,{'react':{'text':'⏳','key':_0x28c61c['key']}});if(!_0x3ce020)return _0x577463(_0x53245c(0x134));let _0x67bcce=await _0x13f213[_0x53245c(0x11c)](_0x3ce020),_0x423ab6=await shannzCdn(_0x67bcce);if(_0x423ab6&&_0x423ab6[_0x53245c(0x12a)]&&_0x423ab6[_0x53245c(0x122)]?.[_0x53245c(0x136)]){const _0x388ccb=_0x53245c(0x119)+_0x423ab6[_0x53245c(0x122)][_0x53245c(0x136)]+'\x0a\x0a>\x20POWERED\x20BY\x20QUEEN\x20ISHU';await _0x13f213[_0x53245c(0x12f)](_0x3a5a62,{'text':_0x388ccb});}else await _0x577463(_0x53245c(0x126));await fs[_0x53245c(0x125)](_0x67bcce),await _0x13f213[_0x53245c(0x12f)](_0x3a5a62,{'react':{'text':'✅','key':_0x28c61c['key']}});}catch(_0x5cc9d1){console[_0x53245c(0x11f)]('Upload\x20Error:',_0x5cc9d1),await _0x577463(_0x53245c(0x124));}});
