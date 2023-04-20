
const menu = [
  {
    id: 1,
    title: 'PITATA Watch',
    category: 'equity based',
    like: 13,
    img: './images/PITATA_Watch.gif',
    desc: `The watch only takes a maximum of 2 seconds to reach the desired time. This is due to our unique asynchronous hand travel which allows the hour and minute hands to travel independently to the target position via the shortest path. 
    The crown can be pulled out and the time adjusted by a spectator. When the crown is pushed back in, the time will be transmitted to the PITATA App. The customized crown and electronic chip open many more possibilities for magic. `,
    progress: 80,
    hoursLeft: 63,
  },
  {
    id: 2,
    title: 'Contact Glove',
    category: 'profit based',
    like: 6,
    img: './images/ContactGlove.gif',
    desc: `ContactGlove is a revolutionary VR controller in the form of a glove, equipped with haptic feedback and high-precision hand tracking. With button input just like conventional VR controllers, ContactGlove allows you to experience a truly immersive VR world. Plus, it's compatible with all SteamVR content! 
    Until now, VR gloves were only accessible to a select few due to their high cost and proprietary software requirements. We've changed that by making our VR glove controller compatible with Steam VR, the most popular VR content platform, making it accessible to a wider audience. Now, everyone can enjoy the benefits of a VR glove controller at a more affordable price.`,
    progress: 50,
    hoursLeft: 83,
  },
  {
    id: 3,
    title: 'Doctor-Developed Seat Cushion for Better Posture',
    category: 'donation based',
    like: 13,
    img: './images/Seat_Cushion.gif',
    desc: `Use it on your chair at work, in the car, on your couch at home, on your yoga mat for meditation, or when you travel by plane. Lifted Lumbar will help improve your posture, relieve your back pain and allow you to sit better, for longer. 
    This isn't our first campaign and that's why we know to expect the unexpected. To set things off on the right foot, we've been in constant communication with our manufacturer and have built a great relationship with them with super clear and honest communications between us. We also have established a great relationship with our 3PL that will deliver your rewards. Since we've not only done a Kickstarter campaign before, but also consistent retail and ecommerce sales (thanks to all of you!), we feel confident in our ability to deliver your rewards, safely and on time. 
    Clear communication is what we stand for. So you can expect that along the entire way we will be clear, honest and prepared for anything. If there are any hiccups along the way, you'll be the first to know. `,
    progress: 27,
    hoursLeft: 218,
  },
  {
    id: 4,
    title: 'Iceegg, The Automatic Ice Spheres Maker',
    category: 'reward based',
    like: 20,
    img: './images/IceSpheresMaker.gif',
    desc: `Iceegg, the automatic ice spheres maker, lets you create the perfect ice spheres at home. No more messing around with expensive and time-consuming molds. 
    Why are bartenders using spherical balls of ice in drinks nowadays? Is it just to impress you with fancy skills?  Most people have to settle for cube ice or crushed ice for a cold drink when serving themselves, since making ice balls at home is difficult and time-consuming. 
    Spherical ice is not used just to impress you. A spherical ice ball melts slower than typical cube ice, chills the drink faster, and won’t dilute the liquor, thereby keeping the flavor.  That’s why the drinks always taste better in the bar than in your home. `,
    progress: 14,
    hoursLeft: 87,
  },
  {
    id: 5,
    title: 'Arduboy Mini',
    category: 'equity based',
    like: 22,
    img: './images/ArduboyMini.gif',
    desc: `Open-Source 8-bit console with 300+ games on a tiny circuit board. Learn to code and share your games online for free.
    It's an 8-bit video game console on a tiny circuit board! The Arduboy Mini includes over 300 games but shrinks the size. Without a case or battery (speaker now included!) of the full size Arduboy FX, the Mini is a cute-as-heck piece of functional circuit board art. And yes, that’s a USB-C port! Choose between a flat colorway or the Graffiti Edition, featuring custom silkscreen tags of developer names from the Arduboy community! `,
    progress: 66,
    hoursLeft: 68,
  },
  {
    id: 6,
    title: 'TMB | The Modular Bottle',
    category: 'profit based',
    like: 18,
    img: './images/TheModularBottle.gif',
    desc: `Glass interior, a cool insulating exterior, different tops, secret compartment, tea infusion and 5 other features you will love! 
    plastic bottles usually get a bad smell after a number of uses - especially if you don’t clean it just after you finish your drink. On the other hand, the glasses we have at home are neutral and easy to clean no matter how many times we use them. For holding liquids there is simply no better material than glass. `,
    progress: 77,
    hoursLeft: 28,
  },
  {
    id: 7,
    title: `Navigator's Loupe by Oceanus Brass`,
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
    title: 'OTTO - The modern Turkish Coffee Pot',
    category: 'equity based',
    like: 12,
    img: './images/CoffeePot.gif',
    desc: `Turkish coffee is one of the oldest brewing methods going back to the 14th Century in the Ottoman empire (hence the name - OTTO). It is traditionally prepared in a special pot called ibrik or çezve, traditionally made of copper or tin. 
    Our aim was to bring Turkish coffee a new contemporary look: a coffee pot that pays hommage to one of the most iconic coffee brewing methods in the world and looks cool enough to have it on display in a modern kitchen.`,
    progress: 10,
    hoursLeft: 285,
  },
  {
    id: 9,
    title: 'WONDER FITTER: The Ultimate Home Archery',
    category: 'profit based',
    like: 16,
    img: './images/Archery.gif',
    desc: `WONDER FITTER is a smart virtual archery for quick and easy home archery games. It uses real recurve bows and blunt dry-firing arrows to simulate a true-to-life archery experience, making it fun and easy to experience the joy of shooting, muscle toning, and mental focus in any place at any time. Great for adults, kids, and any archer of all skills and ages! 
    Want to learn or practice archery, but not sure how or where to go? WONDER FITTER is an innovative new product that allows you to practice archery right in your own home. No hassles trying to find a local archery range or packing up and traveling long distances. Just set up the WONDER FITTER in your home and get started! 
    The price of one WONDER FITTER kit is only equal to the cost of five trips to the backyard training range, or 11.5 hours of membership training, or three hours of professional archery lessons. Don't forget about the real bow and arrow that come with the set and the free access to the APP. You'll have everything you need for a lifetime of fun with this great hobby without breaking your budget. 
    WONDER FITTER is the easiest, fastest, and most practical way to practice archery whenever you want! You'll never be limited by inclement weather, municipal restrictions, cost, or a local professional range that's booked up. Whenever you feel like a shooting fix, you can just grab your bow and arrows and hit the bullseye with WONDER FITTER!`,
    progress: 50,
    hoursLeft: 167,
  },
  {
    id: 10,
    title: 'GaliGear',
    category: 'profit based',
    like: 51,
    img: './images/campaign2.jpg',
    desc: `An interactive learning tool that will encourage kids to explore their creativity and the wonderful world of science and engineering. Encouraging kids to Explore their Creativity and the Incredible World of Science and Engineering. At its core, GaliGear will be an electro-mechanical model of the earth, sun, and moon. More importantly, we envision GaliGear as being an interactive learning tool that will encourage kids to explore their creativity and the incredible world of science and engineering. Kids will learn how to use their hands to build and create, interpret drawings and assembly instructions, how the various disciplines of engineering work together to make something move and react, and how components such as gears and sensors work, all while having fun doing it!  We want GaliGear to engage kids, give them a sense of accomplishment, and show them that learning is fun and exciting. `,
    progress: 50,
    hoursLeft: 436,
  },

];
export default menu;
