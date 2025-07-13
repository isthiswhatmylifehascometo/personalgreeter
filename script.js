function getRandomGreeting(greetings) {
  // Use crypto for better randomness if available
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return greetings[array[0] % greetings.length];
  }
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString('en-US', options);

  const morningGreetings = [
    `Good morning Jheela! It's ${currentDate} and I hope you wake up feeling beautiful and loved x`,
    `Good morning Jheelie! Today is ${currentDate} and you're still the prettiest girl in the world x`,
    `Good morning Jheeeeeeeel! Wishing you a day as lovely as you are. Stay hydrated x`,
    `Good morning Jheelie meelie! It's ${currentDate} and I hope your smile shines all day x`,
    `Good morning Jheel! Remember you're amazing and today will be too x`,
    `Good morning Jheelu! A new day, a new chance to make memories x, have lots of fun`,
    `Good morning to the girl with the prettiest eyes aka jheel! It's ${currentDate} and I hope your dreamt of me x`,
    `Good morning Jheel! The world is brighter because of you x`,
    `Good morning Jheel sihag! Wishing you energy and happiness all day x`,
    `Good morning Jheel aka the prettiest girl in the wirld! It's ${currentDate} and you make every morning special x`
  ];

  const afternoonGreetings = [
    `Good afternoon beautiful! How's your day going? I'm always here for you x`,
    `Good afternoon Jheela! Hope your day is filled with laughter and light and do tell me about it when I get back x`,
    `Good afternoon Jheeeeeeeeeel! Just checking in to remind you I'm thinking of you x`,
    `Good afternoon Jheeeeel! Hope you're taking care of yourself today x`,
    `Good afternoon Jheelie! Sending you a little love for the rest of your day x`,
    `Good afternoon Jheelie meelie! Hope your afternoon is as wonderful as you are x`,
    `Good afternoon Jhil mil! I was just thinking of you and you opened the website, do send me a selfie x`,
    `Good afternoon Jheel! Hope your day is going smoothly and eat well okay? x`,
    `Good afternoon Jheel! Take a breath and enjoy the moment, look outside, its so sunny x`,
    `Good afternoon Jheel! I'm always just a message away x :)`
  ];

  const eveningGreetings = [
    `Good evening gorgeous! Time to unwind and enjoy yourself x`,
    `Good evening Jheel! Hope you find some time to relax tonight x`,
    `Good evening my basketball player! You deserve a peaceful and happy evening x`,
    `Good evening Jheelie! Take some time for yourself, you’ve earned it x`,
    `Good evening Jheela! Let the stress of the day go away and have some rest x`,
    `Good evening Jheelu! I hope you are not too tired cause we still have the night to go through :) x`,
    `Good evening Jheeeeeeeeel! Hope you do something fun this evening x`,
    `Good evening Jheelie! Remember to rest and recharge, bahot thak gayi hogi tu I know x`,
    `Good evening Jheelie meelie! Enjoy your evening, I am always there for you, just call me x`,
    `Good evening Jheel! Time to enjoy the little things and I hope the sunset is beautiful, do send me a picture of it x`
  ];

  const nightGreetings = [
    `Goodnight princess, see you in my dreams. Rest well and wake up refreshed tomorrow x`,
    `Goodnight my baby, hope you have the sweetest dreams tonight (of me ofcc) x`,
    `Goodnight gorgeous, sleep tight and know you’re loved, (very very much ) x`,
    `Goodnight jheela, may your dreams be peaceful and freaky and may it have me in it, jk sweet dreams babe x`,
    `Goodnight jaan, sending you a hug before you sleep, wish I was really there hugging you but this will have to do, see you x`,
    `Goodnight jaaaaaan, dont miss me too much, oh also I see that you are enjoying this website okay anyways see you my love x`,
    `Goodnight jheeli, achhe se sona and I had so much fun talking to you today, see you tomorrow :) x`,
    `Goodnight princess, rest easy and wake up smiling, dont forget to wake me up please :P x`,
    `Goodnight my iris, I’ll be here when you wake up, or maybe you will have to wake my lazy ass up by saying wake up sid haha x`,
    `Goodnight princess, wishing you a calm and restful night x`
  ];

  if (hour >= 4 && hour < 12) {
    return getRandomGreeting(morningGreetings);
  } else if (hour >= 12 && hour < 17) {
    return getRandomGreeting(afternoonGreetings);
  } else if (hour >= 17 && hour < 23) {
    return getRandomGreeting(eveningGreetings);
  } else {
    return getRandomGreeting(nightGreetings);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('greeting').textContent = getGreeting();
});
