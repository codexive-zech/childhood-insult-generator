const yab = [
  'You mess akpu fly gate',
  'Your flat nyash like devil bible',
  'Two kulikuli surround ur village nobody escape',
  'The strongest man for una village na hot eba kill am',
  'You mess Babangida miss him handwriting',
  'You mess e no do poo e no do par e do mama nngozii',
  'Your mama sit on to akara no oil commot',
  'The tallest man for your village dey use ladder climb maggi',
  'You mess all the fishes for river die',
  'Dey give you beer, dey give me Fanta, I drink and said this Fanta is fantastic, you drink and said this beer is beerbeerstic',
  'See your scatter scatter teeth like devil calculator',
  'See your big head like igbogbi signboard',
  'With your scatter scatter teeth like Rambo bullets',
  'With your small small teeth like owerri chin chin',
  'With your leg wey be like Letter  O wey dem use left hand write',
  'See your ogi belle',
  'You mess, babangida repeat primary one',
  'You mess two kuli kuli sumersault',
  'you drink holy water shit miracle',
  'U sh*t here sh*t here sheet here, dey find the LCM',
  'You eat chinchin, mess flour',
  'You eat akara shit 2 mama weh they fry am',
  'You eat moi moi shit raw beans',
  'You carry ladder say u wan climb mountain dew',
  'You go chemist dey price pormoh',
  'You sabi lie satan consult you for advice',
  'You marry obange born anti christ',
  'You mess 6 angels fall down, abi ur mess na angelicides?',
  'You go beer palour wan drink beer they give u fanta you drink u come high',
  'motor jam you in front of your girlfriend you come dey shame to die',
  'the shortest man for una village the take ladder climb maggi cube.',
  'you sh*t here, sh*t there you dey find the one wey resemble you',
  'You see shit for road,You com stop,com lick am,You com say thank God say I no match am',
  'You mess, all the fish inside water say are we safe? One say we are safe but the mess is too hot',
  'You mess, harmattan catch eba',
  'The strongest man for your village, na hot eba kill am',
  'The richest man for your village dey use shovel drink garri',
  'You buy car finish dey wait for nylon',
  'Dem say tall or short, u no gree, naso you be like Ojukwu walking stick.',
  'You tie wrapper dey find back pocket',
  'As you mumu reach you go do conductor follow ice cream man',
];

const yabWord = document.querySelector('.yab');
const yabBtn = document.querySelector('.btn');

// Added a click event on the button
yabBtn.addEventListener('click', function () {
  // get the random number func
  const getRandomYab = getRandomNumb();
  //   change the text of each yab by getting yabs in the yab array via it's index using randomNumb to calc it
  yabWord.textContent = yab[getRandomYab];
});

// wrote a function that give random numbers in the array
function getRandomNumb() {
  return Math.floor(Math.random() * yab.length);
}
