    client.on('message', message => {
        var prefix = "$";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith('say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client.login("NTEwNDAyOTYxMTAxNTUzNjc0.Dsb1TQ.AUJH2Um0ZPgWqoxVHUlNNrBxIn0");
