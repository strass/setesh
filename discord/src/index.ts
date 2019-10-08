import Discord, { TextChannel, Message, RichEmbed } from "discord.js";
import { oc } from "ts-optchain";

if (!process.env.CHANNEL_ID)
  throw new Error("Missing environment variable: CHANNEL_ID");
if (!process.env.DISCORD_TOKEN)
  throw new Error("Missing environment variable: DISCORD_TOKEN");

const botAction = async (req: any) => {
  const payload = JSON.parse(req.body).event;

  console.info("--- REQ ---");
  console.info(req);
  console.info("----------");
  console.info("--- REQ BODY---");
  console.info(req.body);
  console.info("----------");
  console.info("--- REQ BODY EVENT ---");
  console.info(payload);
  console.info("----------");

  const client = new Discord.Client();

  console.log("logging in");
  await client.login(process.env.DISCORD_TOKEN);
  console.log(`ready`);

  let response = {
    statusCode: 502
  };

  try {
    const channel = client.channels.find(
      (_v, key) => key === process.env.CHANNEL_ID
    ) as TextChannel;

    if (channel && channel.type === "text") {
      console.log("found channel");
      try {
        console.log("typing");
        channel.startTyping();
        const embed = new RichEmbed()
          .setColor(0x00ccff)
          .setTitle(`**${oc(payload).data.new["name"]()}**`) // max 256 characters
          .setURL(`http://example.com/${oc(payload).data.new.slug()}`)
          .setDescription(oc(payload).data.new.description()) // max 2048 characters
          .setFooter(
            "Setesh written by @Strass#3678",
            "https://cdn.discordapp.com/avatars/190654235778482176/29e62c2df686f7d2f9bb63c5ba0574d1.png?size=32"
          );
        // .setImage("http://i.imgur.com/yVpymuV.png")
        // .setThumbnail("http://i.imgur.com/p2qNFag.png")
        // .setTimestamp(oc(payload).data.new.created_at());

        const authorName = oc(payload).data.new.author_name();
        const authorIcon = oc(payload).data.new.author_icon();
        const authorUrl = oc(payload).data.new.author_url();
        if (authorName || authorIcon || authorUrl) {
          embed.setAuthor(authorName, authorIcon, authorUrl);
        }

        oc(payload)
          .data.new.fields([])
          .forEach(
            (field: { name: string; value: string; inline?: boolean }) => {
              embed.addField(field.name, field.value, field.inline);
            }
          );

        try {
          console.log("sending post");
          const post = await channel.send(embed);
          response.statusCode = 200;
          console.log("sent post", (post as Message).id);
        } catch (ex) {
          console.error("error sending post:\n", ex);
        }
      } catch (ex) {
        console.error(ex);
      } finally {
        channel.stopTyping();
        console.log("stop typing");
      }
    } else {
      console.error(
        "Something went wrong. Expected a text channel but got: ",
        JSON.stringify(channel)
      );
    }
  } catch (ex) {
    console.error(ex);
  }

  console.log("done");

  console.log("response: " + JSON.stringify(response));
  return response;
};

export default botAction;
