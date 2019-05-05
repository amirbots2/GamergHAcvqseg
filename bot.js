const Discord = require("discord.js");
const LOka = new Discord.Client();



console.log('AmirGamer78');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);
 
});
LOka.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('      ~            ~  By : AmirGamer78 ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  AmirGamer78 " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);
 
});




LOka.on('message', message => {
     
 
     if (message.content === "CreateRole") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "President",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Co President",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "Founder",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Co Founder",
        permissions :   [1],
        color : " #ffa500"
    })
    m.createRole({
        name : "Admin",
        permissions :   [1],
        color : " #32cd32"
    })
    m.createRole({
        name : "Co Admin",
        permissions :   [1],
        color : " #00ff00	"
    })
    m.createRole({
        name : "Army Plus",
        permissions :   [1],
        color : " #00ffff"
    })
    m.createRole({
        name : "Army",
        permissions :   [1],
        color : " #4682b4"
    })
    m.createRole({
        name : "The Helper",
        permissions :   [1],
        color : " #ffff00"
    })
 
    m.createRole({
        name : "Youtuber Plus",
        permissions :   [1],
        color : " #c71585"
    })
    m.createRole({
        name : "Youtuber",
        permissions :   [1],
        color : " #ff1493"
    })
    m.createRole({
        name : "Member",
        permissions :   [1],
        color : " #808080"
    })
     
})
 
 
}
});
LOka.on('message', message => {
         if (message.content === "CreateChannel") {
               LOka.guilds.forEach(m =>{
m.createChannel('「●」rules', 'text');
m.createChannel('「●」welcome', 'text');
m.createChannel('「●」vote', 'text');
m.createChannel('「●」news', 'text');
m.createChannel('「●」cmd', 'text');
m.createChannel('「●」youtube', 'text');
m.createChannel('「●」give-way', 'text');
m.createChannel('「●」support-chat', 'text');
m.createChannel('「◍」Support, 1', 'voice');
m.createChannel('「◍」Support, 2', 'voice');
m.createChannel('「◍」Support, 3', 'voice');
m.createChannel('「◍」Support, 4', 'voice');
m.createChannel('「●」youtubers-chat', 'text');
m.createChannel('「●」youtubers-cmd', 'text');
m.createChannel('Youtubers', 'voice');
m.createChannel('「◍」YT|REC, 1', 'voice');
m.createChannel('「◍」YT|REC, 2', 'voice');
m.createChannel('「◍」YT|REC, 3', 'voice');
m.createChannel('「◍」YT|REC, 4', 'voice');
m.createChannel('「●」music-cmd', 'text');
m.createChannel('「●」Music, 1', 'voice');
m.createChannel('「●」Music, 2', 'voice');
m.createChannel('「●」Music, 3', 'voice');
m.createChannel('「●」Music, 4', 'voice');
m.createChannel('「●」Music, 5', 'voice');
m.createChannel('「●」Music, 6', 'voice');
m.createChannel('「●」game-chat', 'text');
m.createChannel('「⊛」Play , 1', 'voice');
m.createChannel('「⊛」Play , 2', 'voice');
m.createChannel('「⊛」Play , 3', 'voice');
m.createChannel('「⊛」Play , 4', 'voice');
m.createChannel('「⊛」Play , 5', 'voice');
m.createChannel('「⊛」Play , 6', 'voice');
m.createChannel('「◯」PRIVATE , 1', 'voice');
m.createChannel('「◯」PRIVATE , 2', 'voice');
m.createChannel('「◯」PRIVATE , 3', 'voice');
m.createChannel('「◯」PRIVATE , 4', 'voice');
m.createChannel('「◯」PRIVATE , 5', 'voice');
m.createChannel('「◯」PRIVATE , 6', 'voice');
m.createChannel('「◯」PRIVATE , 7', 'voice');
m.createChannel('「◯」PRIVATE , 8', 'voice');
m.createChannel('✺ AFK ,', 'voice');
 
 
 
})
}
 
});
 
LOka.login("NTc0NjQxMzE3NTQ0NzIyNDMy.XM8XMw.Or2Zyux-T4k9ZabgKSj5AgjsWJE")
