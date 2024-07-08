const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaD6vvY60eBZ1LOrre0U";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaD6vvY60eBZ1LOrre0U" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5c3b133f55de078ce434.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_07_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwLFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3eG9JMERsUU90OW5xcElpR2g5RnFyeWkza2R4ZUVSTnRrMTRwWmlDYmNNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEwNjUwMzExNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjE0ODQ4MzY3Rjc1N0UxQTE1QTQwRkFCRjE2QkFBNTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDE4ODcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTA2NTAzMTE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NTQ1OTNCQ0VBNjY0NzFGQ0VFQTU0N0EzMjIyQzI0NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MTg4NzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV1lJU1h5ZGtTek9rbFIwRDVfZjJzQVwiLFxuICBcInBob25lSWRcIjogXCI2MTA3NjgwNy02ZTM3LTRlZjYtYWYxMy1jZjI2MTZkNTUzZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxNzYsXG4gICAgICAyMSxcbiAgICAgIDEzNyxcbiAgICAgIDU5LFxuICAgICAgMjcsXG4gICAgICA4OCxcbiAgICAgIDE2MixcbiAgICAgIDE2NixcbiAgICAgIDE2NyxcbiAgICAgIDE4NCxcbiAgICAgIDIzMyxcbiAgICAgIDEwNSxcbiAgICAgIDIxNSxcbiAgICAgIDQxLFxuICAgICAgODEsXG4gICAgICA0NCxcbiAgICAgIDg1LFxuICAgICAgMjMsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgODksXG4gICAgICA5MyxcbiAgICAgIDEzNSxcbiAgICAgIDE1MCxcbiAgICAgIDE2OSxcbiAgICAgIDU5LFxuICAgICAgNTQsXG4gICAgICAxMjAsXG4gICAgICAxNjUsXG4gICAgICA4LFxuICAgICAgODIsXG4gICAgICAyMjgsXG4gICAgICA0MixcbiAgICAgIDE0NSxcbiAgICAgIDI1NSxcbiAgICAgIDc5LFxuICAgICAgNTcsXG4gICAgICAyMyxcbiAgICAgIDIyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xMGhjMEVFSzJFcnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwield4OWdGcXRYNjJFSCt1dzdTbkl4R2lrU1h1SlQ3NHZVMFd0b0RBckhFcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtd0RqT1FIMHRRaVhZa3dQV1NsT2VGWGpPb1B6c2hTOHVabzJ0eHh3U0o3blVkVWRDQ1p2b0VpTlkvZmhvUGRRazVESllMSXpCbWp0ZDRkYlRmMlRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJveE4zRmtmY2xHc3RQTGlLQzA2UjFaMVJlWVhPZmtOZnVxNTlJVDBqZThJbkVJbVcwMXBlbml1VmZ6VGJpeVhKZzRQZkJLYlQ5ODFQWGh6TlBuTlRqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNjUwMzExNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODk5MDE2NjExMDIxNzo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlVzbWFuIEJpbiBMaWFxYXRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwNjUwMzExNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MTg4NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKU1JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpTUi5qc29uIjogIntcImtleURhdGFcIjpcIkt0emx6U29yNkYxMjRTdmNYM0FwMlZCUjZqRk9iK011a2tFdGcvc1NqdE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNTMxMTE3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4Nzc3ODgwMTUyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
