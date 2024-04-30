// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


let scene, camera, renderer, dice, rotx, roty, comp, ink;

const min = 1;
const max = 20;
let randomNum;
const myLabel = document.getElementById("myLabel");
const text = document.getElementById("text")
let t = "Roll to see what adventure fate has in store for you! "



document.querySelector("body").addEventListener("mousedown", () => {
    roty = .2;
    rotx = .2;
    dice.position.z = Math.sin(Date.now() * 50) * 2;
    dice.position.x = Math.sin(Date.now() * 50) * 2;
    dice.position.y = Math.sin(Date.now() * 50 ) * 2;
})

document.querySelector("body").addEventListener("mouseup", () => {
    sfx.play();
    text.opacity = 1.;
    dice.position.y = 0;
    dice.position.x = 0;
    roty = 0;
    rotx = 0;
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
    words();
})



function init (){

// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
scene = new THREE.Scene();

const light = new THREE.DirectionalLight(0xffffff, 10)
light.position.set(1,1,5);
scene.add(light);

const light2 = new THREE.AmbientLight( 0x404040,10 ); // soft white light
scene.add( light2 );


camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canvas = document.querySelector(".webgl")
renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);


// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true
// controls.enablePan = false
// controls.enableZoom = false
// controls.enable = false
// controls.rotate
const loader = new GLTFLoader(); // to load 3d models
loader.load('assets/dice_d20/Dice/D20.gltf', function (gltf){
    dice = gltf.scene;
    scene.add(dice);
    dice.scale.set(3, 3, 3);
    roty = .007;
    rotx = .007;
    dice.position.y = 0;
    dice.position.x = 0;
    
})
loader.load('assets/ink_bottle_with_quill/ink.gltf', function (gltf){
    ink = gltf.scene;
    scene.add(ink);
    ink.scale.set(100, 100, 100);
    ink.position.x = 20;
    ink.position.y = -11;
    ink.rotation.x = 6;
    ink.rotation.z = 1.5;
    ink.rotation.y = 1.2;

})
loader.load('assets/magic_compass/scene.gltf', function (gltf){
    comp = gltf.scene;
    scene.add(comp);
    comp.scale.set(.9, .9, .9);
    comp.position.x = -19;
    comp.position.y = -9;
    comp.rotation.x = 90;
    comp.rotation.z = -.3;
    comp.rotation.y = 1.3;

})
// loader.load('assets/sword/Viking Sword.gltf', function (gltf){
//     sword = gltf.scene;
//     scene.add(sword);
//     sword.scale.set(120, 120, 120);
//     sword.position.x = -35;
//     sword.position.y = 24.5;
//     sword.position.z = -20;
//     sword.rotation.x = 1.5;
//     sword.rotation.y = .05;
//     sword.rotation.z = 1.5;
// })



camera.position.z = 20;

//Load background texture
const loader2 = new THREE.TextureLoader();
loader2.load('assets/map/Laria 2024-04-26-20-51.png' , function(texture)
            {
             scene.background = texture;  
             texture.opacity = .5;
            });



}





function words(){
    if(randomNum == 1){
        text.textContent = "An attempt to start your adventure was made, however you were just too lazy to get up. No glory, no treasure, only dreams await you."
    }
    else if (randomNum == 2){
        text.textContent = "You stumble out of bed and hit your toe against the bedframe while getting up, your motivation to venture onwards deteriorates as you reel in pain from your mistake."

    }
    else if (randomNum == 3){
        text.textContent = "You get up for the day and go to your wardrobe to get ready for the day... But you forgot to do your laundry... You delay your adventure to the next day until your laundry is done"

    }
    else if (randomNum == 4){
        text.textContent = "Outside your window you notice that the weather is particularly nasy for this time of year. You figure it'd be best if you stayed indoors and see how the weather is tomorrow."

    }
    else if (randomNum == 5){
        text.textContent = "You didn't get enough sleep last night. You decide to sleep in to make up for lost time... Eventually you wake up again... It's too late to go out now, best to try again tomorrow."

    }
    else if (randomNum == 6){
        text.textContent = "The boss called and asked you to come in today, you were looking forward to your day off but you could use the extra cash. You get ready to go in for work and postpone your adventure for tomorrow."

    }
    else if (randomNum == 7){
        text.textContent = "Procrastination got the better of you, the three projects that are due tomorrow have been barely worked on. You decide it's better to work on your assignments and venture out another day"

    }
    else if (randomNum == 8){
        text.textContent = "You wake up with a stuffy nose and an extreme headache. Your sweats feels as hot as burning wax and as cold as frozen ice at the same time. You are in no condition to go outside and see how you'll feel tomorrow"

    }
    else if (randomNum == 9){
        text.textContent = "A new title for you favorite game dropped today, you want to go out and adventure butttttt, that can wait until tomorrow... you spend the rest of your day playing the game."

    }
    else if (randomNum == 10){
        text.textContent = "The sheer amount of tasks upon you this week has overwhelmed you. You know you have time to finish these tasks despite spending today to venture out but you decide to get a head start through sheer panic. Maybe you'll go out tomorrow..."

    }
    else if (randomNum == 11){
        text.textContent = "A text notification appears on your phone as  you're getting ready for the day, your friends cancelled on you last minute. No longer motivated to go out anymore you decide to stay in the house for the day."

    }
    else if (randomNum == 12){
        text.textContent = "Your stomache growls as you rise from your bed, the hunger pangs force you up to go eat breakfast. After awhile you've become so full that you can't move an inch. Your adventure can start tommorrow."

    }
    else if (randomNum == 13){
        text.textContent = "No, just not today... You're not in the mood right now and just need some time alone..."

    }
    else if (randomNum == 14){
        text.textContent = "You were up all night remembering the embarrassing moments of your childhood, why were you even thinking about that? You decide you should sleep in and venture out tomorrow."

    }
    else if (randomNum == 15){
        text.textContent = "You're free today! You check your bank account to see what you can afford to do... The account balance is zero... Maybe you could venture out another day..."

    }
    else if (randomNum == 16){
        text.textContent = "Before you get up you decide to scroll through social media until your're fully awake. Before you even realize, several hours have passed by. It's too late to go out now, best try again tomorrow..."

    }
    else if (randomNum == 17){
        text.textContent = "Not wanting to go out alone, you message your friends to see if anyone else wants to come out, but no one responded on time if at all. You decide to stay inside until tomorrow, maybe someone will be available then."

    }
    else if (randomNum == 18){
        text.textContent = "A text notification appears on your phone as  you're getting ready for the day, your friends cancelled on you last minute. No longer motivated to go out anymore you decide to stay in the house for the day."

    }
    else if (randomNum == 19){
        text.textContent = "The day is beautiful and the weather is perfect for an adventure. But you decided you'd treat yourself indoors today, ordering food and watching your favorite show. There's always tomorrow afterall."

    }
    else if (randomNum == 20){
        text.textContent = "You look outside to a beautiful day, you grab your gear and set out to venture the world. You've finally gathered the will to enjoy the world around you!"
    }
}



function animate(){
    requestAnimationFrame(animate);

    if(dice){
        dice.rotation.x += rotx
        dice.rotation.y += roty
    }


    renderer.render(scene, camera);


}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
}

window.addEventListener('resize', onWindowResize, false);


// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

init();
animate();