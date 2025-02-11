var blupSound = new Audio('blup.mp3');
blupSound.volume = 0.8; // Set the volume to 80%
blupSound.currentTime = 0; // Start the sound from the beginning

var soundEnabled = true; // Track sound state
blupSound.play(); // Start the sound
function toggleSound() {
  soundEnabled = !soundEnabled;
  document.querySelector('.sound').textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) {
    blupSound.play();
  } else {
    blupSound.pause();
  }
}

var love = setInterval(function() {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;

  $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");
}, 500);

var i = 0;
var txt1 = "Hi Baccha.....!  <<    ye  apke liye        <<<  So , Please read everything ...!                                                                           > AAj apse mile hue pure 1years 9 months ho gye h < or mai bahut khus hu ki ap meri life patner h... <<                  Apke sath jitna bhi time spend kar le kam hi lagta h....< Is 1 saal 9 mahine ap mere liye itna improtant ho gye h ki apse jada improtant or ab kuch lagta hi nhi h ....! <<      yr baccha ap bahut payaari ho...jab smile karti ho na to haaye mn karta bs waqt ko kuch der ke aise hi rok de or apko smile karte hue bs dekhte rahe...I love you baccha .....!            > 16 oct ko first time dekhe the apko...wo din aaj bhi yd ......ap kaise chup chup ke dekh rahe the.... Pta h baccha kabhi kabhi h ye sab moments bahut miss karte h.....phele se abhi kitna kuch badl gya h na..... badal to mere feelings bhi gya h... Phele se abhi kitna jada ho gya h...apke liye pyaar... Yr baccha ap bahut khass ho.... Bahut special ho... Ap meri mohabbat ho....meri jaan ho..Mera sab kuch ho... Ap mujhe complete karte h..adhura hu mai apke bina... ..!                     << ...!                                                     > Or kabhi kabhi mera gussa thoda sa jada nhi bs thoda bardaash kar lijiye....apko jada der ke liye apne pass nhi dekh ke thoda pgl ho jaye h....iska ye matlab nhi h ki hum apse gussa h ya ap mere ko hurt kar rahe h ...Aisa kuch nhi h....Mai hu hi aisa ......apka addicted....nhi h apke bina rhena ka aadat.. ap ye sab chij ko lekar pareshan nhi hoiye ga.... Bs aise hi mere sath rahiye ga...jo hoga dono mil ke sath me handal kar lenge ....or ap akele nhi h....Mai hu apke sath....apke pass...jab bhi aisa lage ki apke pass koi nhi h....mere ko yd kar lijiye ga..... ....!                    <<Chaliye abhi kr liye itna hi kafi h...bakki ki baate ab letter me likhenge... Take care baccha...  Bakki mai to hu hi apka bhondu.... I love you mera baccha.......!                                                             >I Love you <Baccha❤.....! |                  <<<< Give me One chance to Prove my Love ...!";
var speed = 50;

typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == '<')
      document.getElementById("text1").innerHTML += '</br>';
    else if (txt1.charAt(i) == '>')
      document.getElementById("text1").innerHTML = '';
    else if (txt1.charAt(i) == '|') {
      $(".bg_heart").css("background-image", "url('https://storage.googleapis.com/podcraftr-profile-image-bucket/harendragf2.jpg')");
     
    } else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}