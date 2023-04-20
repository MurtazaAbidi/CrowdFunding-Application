
const menu = [
  {
    id: 1,
    title: 'YoAudio',
    category: 'reward based',
    like: 161,
    img: './images/gif.gif',
    desc: `YoAudio, our mission is simple: Keep people connected, no matter where they are. We are a community of skiers, snowboarders, mountain bikers – action enthusiasts and families -  who wanted to find a way to always stay safe and connected,  instead of shouting across hilltops and roads. When you’re off the beaten track, phone signal always lets you down, so how can you make sure that you, your friends and family have even more fun …share the vibe and stay safe. Enter YoAudio, we have modernized sport communication  using Bluetooth 5.1 - made  hands free, with a one-touch mute, boosted range and exceptional battery-life. With only 3-buttons The outcome is the perfect companion for  adventures!`,
    progress: 78,
    hoursLeft: 295,
  },
  {
    id: 4,
    title: 'The modern Turkish Coffee Pot',
    category: 'reward based',
    like: 20,
    img: './images/CoffeePot.gif',
    desc: `Turkish coffee is one of the oldest brewing methods going back to the 14th Century in the Ottoman empire (hence the name - OTTO). It is traditionally prepared in a special pot called ibrik or çezve, traditionally made of copper or tin. 
    Our aim was to bring Turkish coffee a new contemporary look: a coffee pot that pays hommage to one of the most iconic coffee brewing methods in the world and looks cool enough to have it on display in a modern kitchen. `,
    progress: 14,
    hoursLeft: 87,
  },
  {
    id: 5,
    title: 'Most Affordable V-LOG Camera',
    category: 'equity based',
    like: 22,
    img: './images/V-LOG-Camera.gif',
    desc: `4K/60fps videos l Support time lapse video & snapshot video. Ready-to-create gorgeously high-quality videos and still photos. 
    The AMKOV is a multifunctional V-LOG digital camera that combines DC and DV functions to capture both 48 million resolution photos and 4K/60fps high speed photography to help you record clear footage of your life. 
    To make day-to-day filming even simpler, AMKOV's handheld tripod is designed with a remote control in an integrated unit, so you can use the remote control to take photos or videos whenever and wherever you want. 
    The built-in webcam with external microphone is perfect for V-LOG 'ers and live streamers who want to take videos on the go. `,
    progress: 66,
    hoursLeft: 68,
  },
  {
    id: 6,
    title: 'Dual-Laser Engraver',
    category: 'profit based',
    like: 18,
    img: './images/Dual-Laser-Engraver.gif',
    desc: `Fiber lasers are good for engraving metal, and plastic while diode lasers are good for engraving/cutting wood, leather, and glass. You normally need to purchase at least two laser engravers with different light sources to cover the full spectrum of materials. 
    What if both light sources are integrated into one machine, and they can be switched in one second according to the material to be engraved? That sounds like the perfect solution! `,
    progress: 77,
    hoursLeft: 28,
  },
  {
    id: 2,
    title: '201 Musical Synthesizer',
    category: 'equity based',
    like: 81,
    img: './images/campaign1.png',
    desc: `The 201 is nearly pocket size, but don't let its small size fool you! Under the hood is some powerful circuitry that will allow you to explore your musical ideas quickly and easily. The 201 is built to last. It features a sturdy anodized aluminum enclosure and maple wood buttons for a nice, tactile feel. It will be assembled and tested by hand at our shop in Brooklyn, NY. `,
    progress: 26,
    hoursLeft: 489,
  },
  {
    id: 3,
    title: 'GaliGear',
    category: 'profit based',
    like: 51,
    img: './images/campaign2.jpg',
    desc: `An interactive learning tool that will encourage kids to explore their creativity and the wonderful world of science and engineering. Encouraging kids to Explore their Creativity and the Incredible World of Science and Engineering. At its core, GaliGear will be an electro-mechanical model of the earth, sun, and moon. More importantly, we envision GaliGear as being an interactive learning tool that will encourage kids to explore their creativity and the incredible world of science and engineering. Kids will learn how to use their hands to build and create, interpret drawings and assembly instructions, how the various disciplines of engineering work together to make something move and react, and how components such as gears and sensors work, all while having fun doing it!  We want GaliGear to engage kids, give them a sense of accomplishment, and show them that learning is fun and exciting. `,
    progress: 50,
    hoursLeft: 436,
  },
  {
    id: 7,
    title: `Navigator's Loupe`,
    category: 'reward based',
    like: 8,
    img: './images/NavigatorLoupe.gif',
    desc: `Built around an impact-resistant, biconvex, glass lens, the Navigator’s Loupe offers a fusion of past and present. Meticulous metalcraft protects the lens between rubber O-rings. Stainless steel hardware draws the instrument together. 
    A 1.8” aperture provides the concentrating power for emergency situations or to leave a mark, not soon forgotten. Whether you’re a sailor, an outdoorsman, or someone who appreciates quality, we believe you'll love the Navigator’s Loupe as much as we do. 
    The Navigator's Loupe has been manufactured to thrive over decades of use, through all of the conditions you intend to throw it through. What was once a labor of love, is now a timeless recycling instrument available for all, but we need your help to make this dream a reality.`,
    progress: 100,
    hoursLeft: 4,
  },
  {
    id: 8,
    title: 'First Moveable Playful AI Home Gym',
    category: 'equity based',
    like: 12,
    img: './images/AI-Home-Gym.gif',
    desc: `Get Gymera, and you could save over $4000. In addition, Gymera provides you with the same strength training as Tonal, the cardio training that Mirror gives, and comes with a  4K screen that doubles as a home movie theatre. 
    Have you ever experienced a workout injury? Our latest AI system can help prevent injuries before you get hurt. It lets you know your body and movement and when you are at risk.  It will also analyze your bone structure, exercise, and even your eating habits to build a holistic picture of your health needs. 
    You are unique, and so is your lifestyle your training should be too. Era system locates your bone markers, analyzes your body posture, and generates your individual personalized training plan.`,
    progress: 10,
    hoursLeft: 285,
  },
  {
    id: 9,
    title: 'The Modular Bottle',
    category: 'profit based',
    like: 16,
    img: './images/TheModularBottle.gif',
    desc: `Glass interior, a cool insulating exterior, different tops, secret compartment, tea infusion and 5 other features you will love! 
    plastic bottles usually get a bad smell after a number of uses - especially if you don’t clean it just after you finish your drink. On the other hand, the glasses we have at home are neutral and easy to clean no matter how many times we use them. For holding liquids there is simply no better material than glass.`,
    progress: 50,
    hoursLeft: 167,
  },
  {
    id: 10,
    title: 'Contact Glove',
    category: 'donation based',
    like: 13,
    img: './images/ContactGlove.gif',
    desc: `ContactGlove is a revolutionary VR controller in the form of a glove, equipped with haptic feedback and high-precision hand tracking. With button input just like conventional VR controllers, ContactGlove allows you to experience a truly immersive VR world. Plus, it's compatible with all SteamVR content! 
    Until now, VR gloves were only accessible to a select few due to their high cost and proprietary software requirements. We've changed that by making our VR glove controller compatible with Steam VR, the most popular VR content platform, making it accessible to a wider audience. Now, everyone can enjoy the benefits of a VR glove controller at a more affordable price.`,
    progress: 27,
    hoursLeft: 218,
  },
];
export default menu;
