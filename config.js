const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "NURYAH ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255 716 526 852";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_10_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDcxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFQ1bTMrRnhieEg1Vk1QeHVXWHdpNjl2OEE0Nm9aampqVElsYkxTUGNaZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZkRoMFlUVmZTVi1EYVBfNDF5Z3MtUVwiLFxuICBcInBob25lSWRcIjogXCI4ZjM4NzRkYi05MGU0LTRkYWEtYTk0Yi1jNmQxYTNjYThmYThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAyMDksXG4gICAgICAxODQsXG4gICAgICAyMzUsXG4gICAgICAxMDQsXG4gICAgICAxNjYsXG4gICAgICAxNDgsXG4gICAgICA4MyxcbiAgICAgIDY0LFxuICAgICAgMjIxLFxuICAgICAgMTc2LFxuICAgICAgODQsXG4gICAgICAyMzIsXG4gICAgICAxMCxcbiAgICAgIDcwLFxuICAgICAgNTcsXG4gICAgICAxNzIsXG4gICAgICAyMjYsXG4gICAgICAyMjIsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAyMTMsXG4gICAgICAyMjMsXG4gICAgICAzMCxcbiAgICAgIDMyLFxuICAgICAgMTIxLFxuICAgICAgMTE4LFxuICAgICAgMTc4LFxuICAgICAgMTkwLFxuICAgICAgOCxcbiAgICAgIDExMCxcbiAgICAgIDI1MyxcbiAgICAgIDE3OSxcbiAgICAgIDU0LFxuICAgICAgMjMzLFxuICAgICAgMTg4LFxuICAgICAgMTE5LFxuICAgICAgMjE3LFxuICAgICAgMTkzLFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkROU1dEUFFNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MTY1MjY4NTI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDczNzgyODc2MTYxNDE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRzdzdjBCRUk2a2pyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdsZW8vMXhlMjIzSEFqNlJ1SkRoQU80RVRPRERnNkdhRllMY3NrbmZuMGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTDNKR1JTWEljcjM5TDY3MjNPOXpKamxjcmE0ekF4OFdLQkdyaTgza3dJTHFlaTd0VFpmTHJLeE9YZ1UxRC9uRTdOZmJBU2dpejFFNWliR1Z4eHFvQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDFrcWpQTmE5dGFvNlhBTENFK3dNTzFsS2xTUmJmY3NPWDhMZ1BxVnpDZ3hZSjBURkRLSDVXR1J0ckNQdm1aUm1LV3FsSnQwRGxqVTM4d1dWOWNuaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzE2NTI2ODUyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTk1Nzk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHZKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyRHZTSnJ5bUYwZk55UzlHYVgwYUIvRE5iZThBbjVUZHcyRnpCU2ZlbnBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzMTQwNjMyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "nuryah cute🥰🌹😜" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "nuryah",
  packname: process.env.PACK_NAME || "nuryah",
  botname : process.env.BOT_NAME  || "nuryah-md",
  ownername:process.env.OWNER_NAME|| "nuryah",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
