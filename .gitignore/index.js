var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');
const ytdl = require('ytdl-core');

var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
var prefix = '§';
var PREFIX = '§';


bot.on('warn', console.warn);
bot.on('error', console.error);

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
function randomtop(min, max) {
    min = Math.ceil(0);
    max = Math.floor(54);
    randnumtop = Math.floor(Math.random() * (max - min +1) + min);
}
function randomjung(min, max) {
    min = Math.ceil(0);
    max = Math.floor(39);
    randnumjung = Math.floor(Math.random() * (max - min +1) + min);
}
function randommid(min, max) {
    min = Math.ceil(0);
    max = Math.floor(48);
    randnummid = Math.floor(Math.random() * (max - min +1) + min);
}
function randomadc(min, max) {
    min = Math.ceil(0);
    max = Math.floor(18);
    randnumadc = Math.floor(Math.random() * (max - min +1) + min);
}
function randomsup(min, max) {
    min = Math.ceil(0);
    max = Math.floor(32);
    randnumsup = Math.floor(Math.random() * (max - min +1) + min);
}


//=============================================
bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg == prefix + 'playgame') {
        random();

        if (randnum == 1) { 
            message.channel.send("**Let's go to League Of Legends**")
        }
        if (randnum == 2) {
            message.channel.send("**Let's go to Fortnite**")
        }
        if (randnum == 3) {
            message.channel.send("**Let's go to OverWatch**")
        }
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *PLAY GAME* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})




//TOP
//AATROX AKALI CAMILLE CHO'GATH DARIUS MUNDO EKKO FIORA GANGPLANK GAREN GNAR HEIMERDINGER ILLAOI IRELIA JAX JAYCE KARMA KARTHUS KAYLE KENNEN KLED LISSANDRA MALPHITE MAOKAI MAITRE YI MORDEKAISER NASUS NAUTILUS OLAF ORNN PANTHEON POPPY QUINN RENEKTON RENGAR RIVEN RUMBLE RYZE SHEN SINGED SION SWAIN TAHM KENCH TALON TEEMO TRUNDLE TRYNDAMERE URGOT VAYNE VLADIMIR VOLIBEAR WUKONG YASUO YORICK
//JUNGLE
//AMUMU CAMILLE DIANA MUNDO ELISE EVELYNN FIDDLESTICKS GRAGAS GRAVES HECARIM IVERN JARVAN IV JAX KAYN KHA'ZIX KINDRED LEE SIN NAUTILUS NIDALEE NOCTURNE NUNU OLAF PANTHEON RAMMUS REK'SAI RENGAR RIVEN SEJUANI SHACO SHYVANA SKARNER TRUNDLE TWITCH UDYR VI WARWICK WUKONG XIN ZHAO ZAC
//MIDDLE
//AHRI AKALI ANIVIA ANNIE AURELION SOL AZIR BRAND CASSIOPEIA CORKI DIANA EKKO FIZZ GALIO IRELIA JAYCE KARMA KARTHUS KASSADIN KATARINA KAYLE LEBLANC LISSANDRA LUCIAN LULU LUX MALPHITE MALZAHAR MAITRE YI NOCTURNE ORIANNA RYZE SION SWAIN SYNDRA TALIYAH TALON TARIC TWISTER FATE VEIGAR VEL'KOZ VIKTOR VLADIMIR XERATH YASUO ZED ZIGGS ZILEA ZOE
//ADC
//ASHE CAITLYN DRAVEN EZREAL GRAVES JHIN JINX KAI'SA KALISTA KOG'MOW LUCIAN MISS FORTUNE SIVIR TRISTANA TWITCH VARUS VAYNE XAYAH
//SUPPORT
//ALISTAR ANNIE BARD BLITZCRANK BRAND BRAUM FIDDLESTICKS GALIO JANNA KARMA LEONA LULU LUX MALPHITE MISS FORTUNE MORGANA NAMI NAUTILUS PYKE RAKAN SHEN SION SONA SORAKA TAHM KENCH TARIC THRESH VEIGAR VEL'KOZ XERATH ZILEA ZYRA

bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + "TOPLANER") {
        message.channel.send({embed: {
            title: "Toplaner Available",
            description: "show all toplaner available",
            fields: [
                {
                    name: "__toplaner__",
                    value: "```AATROX AKALI\nCAMILLE CHO'GATH\nDARIUS MUNDO\nEKKO FIORA \nGANGPLANK GAREN \nGNAR HEIMERDINGER \nILLAOI IRELIA \nJAX JAYCE \nKARMA KARTHUS \nKAYLE KENNEN \nKLED LISSANDRA \nMALPHITE MAOKAI \nMASTER YI MORDEKAISER \nNASUS NAUTILUS \nOLAF ORNN \nPANTHEON POPPY \nQUINN RENEKTON \nRENGAR RIVEN \nRUMBLE RYZE \nSHEN SINGED \nSION SWAIN \nTAHM KENCH TALON \nTEEMO TRUNDLE \nTRYNDAMERE URGOT \nVAYNE VLADIMIR \nVOLIBEAR WUKONG \nYASUO YORICK```",
                    inline: true
                }
            ]
        }})
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *TOPLANER* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})

bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + "JUNGLER") {
        message.channel.send({embed: {
            title: "Jungler Available",
            description: "show all jungler available",
            fields: [
                {
                    name: "__jungler__",
                    value: "```AMUMU CAMILLE \nDIANA MUNDO \nELISE EVELYNN \nFIDDLESTICKS GRAGAS \nGRAVES HECARIM \nIVERN JARVAN IV \nJAX KAYN \nKHA'ZIX KINDRED \nLEE SIN NAUTILUS \nNIDALEE NOCTURNE \nNUNU OLAF \nPANTHEON RAMMUS \nREK'SAI RENGAR \nRIVEN SEJUANI \nSHACO SHYVANA \nSKARNER TRUNDLE \nTWITCH UDYR \nVI WARWICK \nWUKONG XIN \nZHAO ZAC```",
                    inline: true
                }
            ]
        }})
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *JUNGLER* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})

bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + "MIDLANER") {
        message.channel.send({embed: {
            title: "Midlaner Available",
            description: "show all midlaner available",
            fields: [
                {
                    name: "__midlaner__",
                    value: "```AHRI AKALI \nANIVIA ANNIE \nAURELION SOL \nAZIR BRAND \nCASSIOPEIA CORKI \nDIANA EKKO \nFIZZ GALIO \nIRELIA JAYCE \nKARMA KARTHUS \nKASSADIN KATARINA \nKAYLE LEBLANC \nLISSANDRA LUCIAN \nLULU LUX \nMALPHITE MALZAHAR \nMASTER YI NOCTURNE \nORIANNA RYZE \nSION SWAIN \nSYNDRA TALIYAH \nTALON TARIC \nTWISTER FATE \nVEIGAR VEL'KOZ \nVIKTOR VLADIMIR \nXERATH YASUO \nZED ZIGGS \nZILEA ZOE```",
                    inline: true
                }
            ]
        }})
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *MIDLANER* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})

bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + "ADC") {
        message.channel.send({embed: {
            title: "ADC Available",
            description: "show all adc available",
            fields: [
                {
                    name: "__adc__",
                    value: "```ASHE CAITLYN \nDRAVEN EZREAL \nGRAVES JHIN \nJINX KAI'SA \nKALISTA KOG'MOW \nLUCIAN MISS FORTUNE \nSIVIR TRISTANA \nTWITCH VARUS \nVAYNE XAYAH```",
                    inline: true
                }
            ]
        }})
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *MIDLANER* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})

bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + "SUPPORT") {
        message.channel.send({embed: {
            title: "Support Available",
            description: "show all support available",
            fields: [
                {
                    name: "__support__",
                    value: "```ALISTAR ANNIE \nBARD BLITZCRANK \nBRAND BRAUM \nFIDDLESTICKS GALIO \nJANNA KARMA \nLEONA LULU \nLUX MALPHITE \nMISS FORTUNE MORGANA \nNAMI NAUTILUS \nPYKE RAKAN \nSHEN SION \nSONA SORAKA \nTAHM KENCH TARIC \nTHRESH VEIGAR \nVEL'KOZ XERATH \nZILEA ZYRA```",
                    inline: true
                }
            ]
        }})
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *SUPPORT* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})




//RANDTOP
bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + 'RANDTOP') {
        randomtop();

        if (randnumtop === 1) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Aatrox",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Aatrox.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 2) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Akali",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Akali.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 3) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Camille",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Camille.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 4) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Cho'Gath",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Chogath.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 5) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Darius",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Darius.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 6) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Mundo",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/DrMundo.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 7) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ekko",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ekko.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 8) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Fiora",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Fiora.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 9) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Gangplank",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Gangplank.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 10) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Garen",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Garen.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 11) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Gnar",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Gnar.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 12) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Heimerdinger",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Heimerdinger.png?image=w_140&v=1"
                }
            }})
        }
        
        if (randnumtop === 13) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Illaoi",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Illaoi.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 14) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Irelia",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Irelia.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 15) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Jax",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Jax.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 16) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Jayce",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 17) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Karma",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Karma.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 18) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Karthus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Karthus.png?image=w_140&v=1"
                }
            }})
        }
        
        if (randnumtop === 19) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kennen",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Kennen.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 20) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kled",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Kled.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 21) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lissandra",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lissandra.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 22) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Malphite",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Malphite.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 23) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Maokai",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Maokai.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 24) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Master Yi",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/MasterYi.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 25) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Mordekaiser",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Mordekaiser.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 26) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nasus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nasus.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 27) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nautilus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nautilus.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 28) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Olaf",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Olaf.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 29) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ornn",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ornn.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 30) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Pantheon",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Pantheon.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 31) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Poppy",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Poppy.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 32) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Quinn",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Quinn.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 33) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Renekton",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Renekton.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 34) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Rengar",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Rengar.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 35) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Riven",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Riven.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 36) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Rumble",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Rumble.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 37) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ryze",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 38) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Shen",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Shen.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 39) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Singed",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Singed.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 40) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Sion",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Sion.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 41) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Swain",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Swain.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 42) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Tahm Kench",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/TahmKench.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 43) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Talon",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Talon.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 44) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Teemo",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Teemo.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 45) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Trundle",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Trundle.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 46) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Tryndamere",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Tryndamere.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 47) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Urgot",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Urgot.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 48) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Vayne",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Vayne.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 49) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Vladimir",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Vladimir.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 50) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Volibear",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 51) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Wukong",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Wukong.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 52) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Yasuo",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Yasuo.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumtop === 53) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Yorick",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Yorick.png?image=w_140&v=1"
                }
            }})
        }

        if (randnumtop === 54) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Cassiopeia",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Cassiopeia.png?image=w_140&v=1"
                }
            }})
        }
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *RANDTOP* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})


    }

})

//RANDJUNGLE
bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + 'RANDJUNG') {
        randomjung();

        if (randnumjung === 1) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Amumu",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Amumu.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 2) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Camille",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Camille.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 3) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Diana",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Diana.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 4) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Dr.Mundo",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/DrMudo.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 5) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Elise",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Elise.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 6) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Evelynn",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Evelynn.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 7) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Fiddlesticks",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Fiddlesticks.png?image=w_140&v=1"
                }
            }})
        }
        
        if (randnumjung === 8) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Gragas",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Gragas.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 9) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Graves",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Graves.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 10) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Hecarim",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Hecarim.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 11) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ivern",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ivern.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 12) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Jarvan IV",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/JarvanIV.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 13) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Jax",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Jax.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 14) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kayn",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Kayn.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 15) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kha'Zix",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/KhaZix.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 16) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kindred",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Kindred.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 17) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lee Sin",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 18) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nautilus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nautilus.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 19) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nidalee",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nidalee.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 20) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nocturne",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nocturne.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 21) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nunu",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nunu.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 22) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Olaf",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Olaf.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 23) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Pantheon",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Pantheon.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 24) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Rammus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Rammus.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 25) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Rek'Sai",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/RekSai.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 26) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Rengar",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Rengar.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 27) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Riven",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Riven.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 28) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Sejuani",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Sejuani.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 29) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Shaco",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Shaco.png?image=w_140&v=1"
                }
            }})
        }        
        if (randnumjung === 30) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Shyvana",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Shyvana.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 31) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Skarner",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Skarner.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 32) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Trundle",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Trundle.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 33) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Twitch",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Twitch.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 34) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Udyr",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Udyr.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 35) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Vi",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Vi.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 36) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Warwick",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Warwick.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 37) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Wukong",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Wukong.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 38) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Xin Zhao",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/XinZhao.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumjung === 39) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Zac",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Zac.png?image=w_140&v=1"
                }
            }})
        }
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *RANDJUNG* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})

    }
})

//RANDMID
bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + 'RANDMID') {
        randommid();

        if (randnummid === 1) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ahri",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ahri.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 2) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Akali",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Akali.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 3) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Anivia",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 4) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Annie",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Annie.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 5) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Aurelion Sol",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/AurelionSol.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 6) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Azir",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Azir.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 7) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Brand",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Brand.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 8) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Cassiopeia",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Cassiopeia.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 9) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Corki",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Corki.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 10) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Diana",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Diana.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 11) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ekko",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ekko.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 12) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Fizz",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Fizz.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 13) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Galio",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Galio.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 14) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Irelia",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Irelia.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 15) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Jayce",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 16) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Karma",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Karma.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 17) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Karthus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Karthus.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 18) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kassadin",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Kassadin.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 19) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Katarina",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Katarina.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 20) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kayle",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Kayle.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 21) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Leblanc",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Leblanc.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 22) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lissandra",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lissandra.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 23) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lucian",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 24) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lulu",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lulu.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 25) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lux",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lux.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 26) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Malphite",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Malphite.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 27) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Malzahar",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Malzahar.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 28) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Master Yi",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/MasterYi.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 29) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nocturne",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nocturne.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 30) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Orianna",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Orianna.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 31) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ryze",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ryze.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 32) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Sion",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Sion.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 33) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Swain",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Swain.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 34) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Syndra",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Syndra.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 35) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Taliyah",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Taliyah.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 36) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Talon",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Talon.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 37) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Taric",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Taric.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 38) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Twisted Fate",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/TwistedFate.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 39) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Veigar",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Veigar.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 40) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Vel'Koz",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/VelKoz.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 41) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Viktor",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 42) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Vladimir",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Vladimir.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 43) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Xerath",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Xerath.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 44) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Yasuo",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Yasuo.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 45) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Zed",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Zed.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 46) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ziggs",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ziggs.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 47) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Zilean",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Zilean.png?image=w_140&v=1"
                }
            }})
        }
        if (randnummid === 48) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Zoe",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Zoe.png?image=w_140&v=1"
                }
            }})
        }
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *RANDMID* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})




    }
})

//RANDADC
bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + 'RANDADC') {
        randomadc();

        if (randnumadc === 1) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ashe",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ashe.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc ===2) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Caitlyn",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Caitlyn.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 3) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Draven",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Draven.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 4) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Ezreal",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Ezreal.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 5) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Graves",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Graves.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 6) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Jhin",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Jhin.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 7) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Jinx",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Jinx.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 8) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kai'Sa",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/KaiSa.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 9) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kalista",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Kalista.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 10) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Kog'Mow",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/KogMow.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc ===11) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lucian",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 12) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Miss Fortune",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/MissFortune.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 13) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Sivir",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Sivir.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 14) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Tristana",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Tristana.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 15) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Twitch",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Twitch.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 16) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Varus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Varus.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 17) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Vayne",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Vayne.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumadc === 18) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Xayah",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Xayah.png?image=w_140&v=1"
                }
            }})
        }
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *RANDADC* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})

    }
})

//RANDSUP
bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg === prefix + 'RANDSUP') {
        randomsup();

        if (randnumsup === 1) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Alistar",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Alistar.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 2) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Annie",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Annie.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 3) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Bard",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Bard.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 4) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Blitzcrank",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Blitzcrank.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 5) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Brand",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Brand.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 6) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Braum",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Braum.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 7) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Fiddlesticks",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Fiddlesticks.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 8) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Galio",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Galio.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 9) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Janna",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Janna.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 10) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Karma",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Karma.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 11) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Leona",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Leona.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 12) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lulu",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lulu.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 13) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Lux",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Lux.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 14) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Malphite",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Malphite.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 15) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Miss Fortune",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/MissFortune.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 16) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Morgana",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Morgana.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 17) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nami",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nami.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 18) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Nautilus",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Nautilus.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 19) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Pyke",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Pyke.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 20) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Rakan",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Rakan.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 21) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Shen",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Shen.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 22) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Sion",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Sion.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 23) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Sona",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Sona.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 24) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Soraka",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Soraka.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 25) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Tahm Kench",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/TahmKench.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 26) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Taric",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Taric.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 27) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Thresh",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Thresh.png?image=w_140&v=1"
                }
            }})
        }
        
        if (randnumsup === 28) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Veigar",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Veigar.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 29) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Vel'Koz",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Vel'Koz.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 30) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Xerath",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Xerath.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 31) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Zilean",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Zilean.png?image=w_140&v=1"
                }
            }})
        }
        if (randnumsup === 32) {
            message.channel.send({embed: {
                title: "You'll play ",
                description: "Zyra",
                thumbnail: {
                    url: "http://opgg-static.akamaized.net/images/lol/champion/Zyra.png?image=w_140&v=1"
                }
            }})
        }
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *RANDSUP* ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})

    }
})





//===========================================
const queue = new Map();

bot.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(PREFIX)) return undefined;
    const args = msg.content.split(' ');
    const serverQueue = queue.get(msg.guild.id);

    if (msg.content.startsWith(`${PREFIX}play`)) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music.');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('I cannot connect to your voice channel, make sure I have the porper permissions.');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions.')
        }

        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        }
        console.log(songInfo.baseUrl);
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(msg.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.deleted(msg.guild.id);
                return msg.channel.send(`I could not join the voice channel: ${error}`);
            }            
        } else {
            serverQueue.song.push(song);
            return msg.channel.send(`**${song.title}** has been added to the queue !`);
        }

        return undefined;
    } else if (msg.content.startsWith(`${PREFIX}stop`)) {
        if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel !');
        msg.member.voiceChannel.leave();
        return undefined;
    }
});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.deleted(guild.id);
        return;
    }

    const dispatcher = connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('song ended');
            serverQueue.songs.shift();
            play(guild, serverQueue.song[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(5 / 5);
}
//===============================================




//==========SETGAME ACTIVITY==========
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity(`League of Legends`, {type: "PLAYING"});
});




//==========TOTAL USER==========
bot.on('guildMemberAdd', member => {
    console.log(member.user.username + ' has joined the server')
    console.log(member)

    
    var role = member.guild.roles.find('name', 'TeamMates');

    member.addRole(role)

    member.guild.channels.get('456781453309640705').send({embed: {
        title: member.user.username + '** has joined the server !**',
        color: 0x00FF17,
        timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: bot.user.username
            }
    }});
});

bot.on('guildMemberRemove', member => {

    member.guild.channels.get('456781453309640705').send({embed: {
        title: member.user.username + '** has left the server !**',
        color: 0xFF0000,
        timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: bot.user.username
            }
    }});
});



bot.on('guildMemberAdd', member => {
    member.guild.channels.get('456765177422020619').setName(`Total Users | ${member.guild.memberCount}`);
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('456765177422020619').setName(`Total Users | ${member.guild.memberCount}`);
});




bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg == prefix + 'BNPB') {
        message.delete();
        message.channel.send({embed: {
            title: "Bonne Nuit le Meilleur, @PéBé#3089 ❤",
            color: 0x17A589,
        }})
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: BNPB ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }

    if (msg == prefix + 'BNPC') {
        message.delete();
        message.channel.send({embed: {
            title: "Bonne Nuit le Meilleur, @PéCé#3451 ❤",
            color: 0x17A589,
        }})
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: BNPC ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})




bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg == prefix + 'PLAYGAME') {
        random();

        if (randnum == 1) {
            message.channel.send("**Let's go to League Of Legends**")
        }
        if (randnum == 2) {
            message.channel.send("**Let's go to Fortnite**")
        }
        if (randnum == 3) {
            message.channel.send("**Let's go to CSGO**")
        }
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: PLAY GAME ",
            color: 0x2EF512,
            timestamp: new Date(),
        }})
    }
})




bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg == prefix + 'HELP') {
        message.channel.send({embed: {
            title: "📋 COMMANDS: 📋",
            description: "The commands you can do with this bot !",
            url: "",
            color: 0x17A589,
            //author: {
            //    name: bot.user.username,
            //    icon_url: bot.user.avatarURL
            //},
            fields:[
                {
                    name: "MUSIC",
                    value: "```§play [url]    to play a music.\n§stop          to stop a music.\n[!] The Queue system isn't available yet [!]```",
                    inline: false
                },
                {
                    name: "INFO",
                    value: "```§userstats     to know how many messages you sent.\n§sinfo         to know server\'s info.\n§info          to know your info.```",
                    inline: false
                },
                {
                    name: "GAME",
                    value: "```§playgame      to choose a game.```",
                    inline: false
                },
                {
                    name: "LEAGUE OF LEGEND",
                    value: "```§toplaner      to show the toplaner available.\n§randtop       to generate a random toplaner.\n\n§jungler       to show the jungler available.\n§randjung      to generate a random jungler.\n\n§midlaner      to show the midlaner available.\n§randmid       to generate a random midlaner.\n\n§adc           to show all adc available.\n§randadc       to generate a random adc.\n\n§support       to show the support available.\n§randsup       to generate a random support.```",
                    inline: false
                },
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: bot.user.username
            }
        }});
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: HELP COMMAND",
            color: 0x17A589,
            timestamp: new Date(),
        }})
    }
})




bot.on('message', message => {
    let msg = message.content.toLocaleLowerCase();
    let online = `${message.guild.members.filter(m => m.presence.status !== 'offline').size}`;

    if (msg === prefix + 'sinfo') {
        message.channel.send({embed: {
            title: `${message.guild.name}\' Info`,
            color: 0x747474,
            fields:[
                {
                    name: "Online Users",
                    value: `${online}`,
                    inline: true
                },
                {
                    name: "Total Users",
                    value: `${message.guild.memberCount}`,
                    inline: true
                },
                {
                    name: "Total Channels",
                    value: `${online}`,
                    inline: true
                },
                {
                    name: "Total Roles",
                    value: `${message.guild.roles.size}`,
                    inline: true
                },
                {
                    name: "Region",
                    value: `${message.guild.region}`,
                    inline: true
                },
                {
                    name: "Owner",
                    value: `${message.guild.owner}`,
                    inline: true
                },
                {
                    name: "Guild Created At",
                    value: `${message.guild.createdAt}`,
                    inline: false
                },
            ]
        }})
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *SERVER INFO*",
            color: 0x747474,
            timestamp: new Date(),
        }})
    }    
})


bot.on('message', message => {
    let msg = message.content.toLocaleLowerCase();
    let online = `${message.guild.members.filter(m => m.presence.status !== 'offline').size}`;

    if (msg === prefix + 'info') {
        message.channel.send({embed: {
            title: "Your Info",
            color: 0xC4C4C4,
            fields:[
                {
                    name: "Online Users",
                    value: `${online}`,     
                    inline: true
                },
                {
                    name: "Self voiceChannel",
                    value: `${message.member.voiceChannel}`,
                    inline: true
                },
                {
                    name: "Self role",
                    value: `${message.member.roles}`,
                    inline: true
                },
                {
                    name: "Guild Created At",
                    value: `${message.guild.createdAt}`,
                    inline: false
                },
                {
                    name: "You Have Joined This Guild At",
                    value: `${message.member.joinedAt}`,
                    inline: false
                },
            ],
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: bot.user.username
            }
        }})
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: *INFO* ",
            color: 0xC4C4C4,
            timestamp: new Date(),
        }})
    }
})


bot.on('message', message => {
    var msg = message.content.toUpperCase();
    var sender = message.author;

    if (msg === prefix + 'USERSTATS') {
        message.channel.send({embed: {
            title: 'You sent **' + userData[sender.id].messagesSent + '** messages !',
            color: 0xEBFF00,
        }});
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: USERSTATS ",
            color: 0xFFF000,
            timestamp: new Date(),
        }})
    }

    if (!userData[sender.id]) userData[sender.id] = {
        messagesSent: 0
    }

    userData[sender.id].messagesSent++;

    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    });
})




bot.on('message', message =>{
    var msg = message.content.toUpperCase();

    if (msg === 'PING') {
        message.channel.send(`Pong! Time between you and the bot: ${Date.now() - message.createdTimestamp}ms`);
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: PING ",
            color: 0x1EE162,
            timestamp: new Date(),
        }})
    }
})




bot.on('message', message =>  {
    var msg = message.content.toUpperCase();

    if (msg === prefix + "TEST") {
        if (message.author.id === '181468060501147648') {
            message.channel.send("test completed")
        }
        //DEBUG
        message.guild.channels.get('455493822005379103').send({embed: {
            title: "Command use",
            description: message.author + " has used: TEST ",
            color: 0x7490A4,
            timestamp: new Date(),
        }})
    }
})




bot.on('message', message => {
    var msg = message.content.toUpperCase();

    if (msg.includes('MARCEAU')) {
        message.delete();
        message.author.send('Le mot **marceau** est banni, ne l\'utilisez pas !');
    }
})


bot.login(process.env.BOT_TOKEN);
