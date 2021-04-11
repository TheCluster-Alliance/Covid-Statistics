const Discord = require('discord.js');

module.exports = {
    name:'help',
    description:"Help Command!",

    execute(message, args, Discord) {

        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FD0303')
        .setTitle('**__Commands List__**')
        .setDescription('**__prefix__: c?**')
        .addField('**`c?info`**', 'Sends the Information about Covid Statistics Bot', true)
        .addField('**`c?information`**', 'To get the Basic Information About COVID-19', true)
        .addField('**`c?world`**', 'To check Covid-19 Cases of the World', true)
        .addField('**`c?covid`**', 'To Track Covid-19 Cases of a specific Country', true)
        .addField('**`c?prevention`**', 'Ways to Prevent COVID-19', true)
        .addField('**`c?symptoms`**', 'Symptoms of COVID-19', true)
        .addField('**`c?support`**', 'Sends the Bot Support Server Invite', true)
        .addField('**`c?invite`**', 'Sends the link for Inviting Covid Statistics in your guild', true)
        .addField('**`c?vote`**', 'Sends the link for Voting the Bot on top.gg', true)
        message.channel.send(helpEmbed);
    }
}