var mafiaquoteoftheday = [];
mafiaquoteoftheday[0] =
  " I'm gonna make him an offer he can't refuse.-Don Vito Corleone";
mafiaquoteoftheday[1] =
  " Revenge is a dish best served cold.-Don Vito Corleone";
mafiaquoteoftheday[2] =
  " Fredo, you're my older brother, and I love you. But don't ever take sides with anyone against the Family again. Ever.-Michael Corleone";
mafiaquoteoftheday[3] =
  " A friend should always underestimate your virtues and an enemy overestimate your faults.-Don Vito Corleone";
mafiaquoteoftheday[4] =
  "  You talk about vengeance. Is vengeance going to bring your son back to you? Or my boy to me?-Don Vito Corleone";
mafiaquoteoftheday[5] =
  " A man who doesn't spend time with his family can never be a real man.-Don Vito Corleone";
mafiaquoteoftheday[6] =
  " No Sicilian can refuse any request on his daughter's wedding day.-Tom Hagen";
mafiaquoteoftheday[7] =
  " Today I settled all Family business, so don't tell me you're innocent, Carlo.- Michael Corleone";
mafiaquoteoftheday[8] =
  " You sonofabitch, do you know who I am? I'm Moe Greene! I made my bones when you were going out with cheerleaders.-Moe Greene";
mafiaquoteoftheday[9] = " Leave the gun. Take the cannoli.-Clemenza";
mafiaquoteoftheday[10] =
  "It's a Sicilian message. It means Luca Brasi sleeps with the fishes.-Clemenza";
mafiaquoteoftheday[11] =
  " I want you to see what he's got under his fingernails.-Don Vito Corleone";
mafiaquoteoftheday[12] =
  " Mr. Corleone is a man who insists on hearing bad news immediately.-Tom Hagen";
mafiaquoteoftheday[13] =
  " I want you to see what he's got under his fingernails.-Don Vito Corleone";
mafiaquoteoftheday[14] =
  " Some day, and that day may never come, I will call upon you to do a service for me. But uh, until that day, accept this justice as a gift on my daughter's wedding day.-Don Vito Corleone";
mafiaquoteoftheday[15] =
  " If you had come to me in friendship, then this scum that ruined your daughter would be suffering this very day.-Don Vito Corleone";
mafiaquoteoftheday[16] =
  " A lawyer with his briefcase can steal more than a hundred men with guns.-Didn't make it to the scene";
mafiaquoteoftheday[17] =
  " Don Corleone, I am honored and grateful that you have invited me to your home on the wedding day of your daughter. May their first child be a masculine child-Luca Brassi";
mafiaquoteoftheday[18] =
  " I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should be listening.-Don Vito Corleone";
mafiaquoteoftheday[19] =
  " It makes no difference to me what a man does for a living, understand.-Don Vito Corleone";
mafiaquoteoftheday[20] =
  " My father taught me many things ... keep your friends close, but your enemies closer.-Michael Corleone";
mafiaquoteoftheday[21] =
  " I know it was you, Fredo. You broke my heart. You broke my heart.-Michael Corleone";
mafiaquoteoftheday[22] =
  " Fredo, you're nothing to me now; not a brother, not a friend. I don't want to know you, or what you do.-Michael Corleone";
mafiaquoteoftheday[23] =
  " If anything in this life is certain; If history has taught us anything, it's that you can kill anyone.-Michael Corleone";
mafiaquoteoftheday[24] =
  " Whatcha go to college to get stupid? You're really stupid!-Sunny Corleone";
mafiaquoteoftheday[25] =
  " I betrayed my wife. I betrayed myself. I killed men and I ordered men to be killed. Ah, it's useless... I killed -- I ordered the death of my brother. He injured me. I killed my mother's son. I killed my father's son-Michael Corleone";
mafiaquoteoftheday[26] =
  " Just when I thought I was out, they pull me back in. [Our true enemy has not yet shown his face-Michael Corleone";
mafiaquoteoftheday[27] =
  " I would burn in Hell to keep you safe.-Michael Corleone";
mafiaquoteoftheday[28] =
  " Don't overestimate the power of forgiveness.-Michael Corleone";
mafiaquoteoftheday[29] =
  " Never hate your enemies -- it effects your judgement.-Michael Corleone";
mafiaquoteoftheday[30] =
  " Politics and crime -- they're the same thing.-Michael Corleone";

function mafiaQuoteOfTheDay() {
  var randomMafiaQuoteOfTheDay = Math.floor(
    Math.random() * mafiaquoteoftheday.length
  );
  document.getElementById("pquote").innerHTML =
    mafiaquoteoftheday[randomMafiaQuoteOfTheDay];
}
