const { inspect } = require("util");
const { stripIndents } = require("common-tags");
const { VultrexHaste } = require("vultrex.haste");
const haste = new VultrexHaste({url:"https://hasteb.in"});

module.exports.run = async(client,message,args) =>{
  if(!args[0]) return message.reply("provide Javascript code to evaluate..");

  try {
    const start = process.hrtime();
    let output = eval(args.join(""));
    const difference = process.hrtime(start);
    if(typeof output !=="string") output = inspect(output, { depth:2});

    return message.channel.send(stripIndents`
    *Exectue in ${difference[0]> 0 ? `${difference[0]}s ` : ""}${difference[1]/1e6}ms*
    \`\`\`js
    ${output.lenght > 1950 ? await haste.post(output): output}
    \`\`\`
  `);
  
 }catch(err){
   return message.channel.send(stripIndents`
      Error:
      \`${err}\`
      `);
 }
}

module.exports.help ={
  name: "eval",
  descriptuon: "Evaluate Javascript code"
}