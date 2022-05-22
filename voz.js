window.contador=0;          
window.contadorcubogrande=0;
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      var arreglovoz = [  'Hola octocat',
            'octocat Dime un dato curioso',
            'octocat ¿que es GitHub?',
            'octocat Qué es github',
            'gracias octocat',
            'octocat eso es todo por ahora',
            'octocat preséntate',
            'octocat muéstrame a IronCat',
            'octocat Muéstrame a Iron Cat',
            'octocat Muéstrame a Iron Man',  
            'Muéstrame a Iron Cat', 
            'Muéstrame Iron Cat',              
            'octocat muéstrame a IronCat más grande',
            'octocat Muéstrame a Iron Cat más grande', 
            'octocat Muéstrame Iron Man más grande', 
            'Muéstrame a Iron Cat más grande', 
            'Muéstrame Iron Cat más grande', 
            'octocat muéstrame a IronCat más pequeño',
            'octocat Muéstrame ironcat más pequeño',
            'octocat Muéstrame a Iron Cat más pequeño',
            'octocat Muéstrame Iron Cat más pequeño',
            'octocat Haz que Iron Cat desaparezca',
            'octocat Haz que ironcat desaparezca', 
            'octocat regresa al escenario',
            'realidad muestra un segundo modelo 3D',
            'realidad regresa al cubo',
            'realidad animación'];

var grammar = '#JSGF V1.0; grammar arreglovoz; public <arreglovoz> = ' + arreglovoz.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;           
recognition.lang = 'es-MX';        
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#text');  
//var hints = document.querySelector('.hints');  
var vozHTML= '';
arreglovoz.forEach(function(v, i, a){
console.log(v, i);

});
document.onkeydown = function() {
recognition.start();
console.log('Estoy listo para escuchar.');

}       

recognition.onresult = function(event) {            
var voz = event.results[0][0].transcript;
//diagnostic.textContent = 'Dijiste: ' + voz + '.';           
diagnostic.setAttribute("value", "Dijiste: " + voz + ".");
//diagnostic.textContent = 'Dijiste: ' + voz + '.';
bg = voz;
var bg = document.querySelector('text');


//VISUALIZO EN CONSOLA
console.log(bg);
console.log(voz);

function randD(array){
var rand= Math.random()*array.length|0;
var result=array[rand];
return result;
}

// Interacciones iniciales
if(voz === 'Hola octocat'){
console.log("Hola, estas saludando!");
let utterance = new SpeechSynthesisUtterance('Hola amigo, bienvenido. Estoy listo y preparado para resolver tus dudas. Te escucho...')
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)     
}


if(voz === 'gracias octocat'){
console.log("Estas dando las gracias");
let utterance = new SpeechSynthesisUtterance('de nada amigo, quieres que te ayude con algo mas?')
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)   
}


if(voz === 'octocat eso es todo por ahora'){
console.log("Hola, estas saludando!");
let utterance = new SpeechSynthesisUtterance('de nada amigo, siempre es un placer ayudarte.')
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)     
}

if(voz === 'octocat preséntate'){
console.log("octocat se esta presentando!");
let utterance = new SpeechSynthesisUtterance('Hola, mi nombre es octocat mascota y logotipo de GitHub, mi nombre e imagen hacen referencia a la estructura y las ramificaciones de mi cuerpo, es decir, la cabeza es mi rama principal y mis tentáculos las ramificaciones de ella, por lo que se asemeja a la estructura y funcionamiento de un repositorio de GitHub.')
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)     
}

if(voz === 'octocat Dime un dato curioso'){
console.log("Hola, estas pregutando!");
var datos=['¿Sabías que... Existe una comunidad en línea dedicada a mí? En esta puedes encontrar imágenes de mis distintas facetas que puedes utilizar gratuitamente como avatar de tu usuario de GitHub, para obtener más información visita: octodex.GitHub.com.', 
'¿Sabias que.. en el año 2013 la marca decide cambiar radicalmente la tipografía del logotipo de GitHub y elimina información innecesaria de esta?, si como escuchas, ya que la plataforma para ese entonces había ganado muchísima fama la plataforma decide eliminar la leyenda "social coding" del logotipo y se decide incorporarme como imagen de la empresa, de esta forma seria más fácil para el usuario recordar un pulpo con cabeza de gato en la parte superior de la leyenda "GitHub" que un par de letras.',
'¿Sabias que... GitHub fue desarrollado por Chris Wanstrath, P. J. Hyett, Tom Preston-Werner y Scott Chacon usando Ruby on Rails durante el 2008?, si, GitHub fue desarrollado por tecnología de código abierto y publicado durante el 2008, no obstante, la compañía ya existía y estaba registrada desde el 2007.',
'¿Sabías que.. en México solo existen 8 campus GitHub en todo el país y uno de ellos se encuentra en Tlaxiaco? ¡Así es! el Instituto Tecnológico de Tlaxiaco es el único campus en Oaxaca que colabora directamente con GitHub.',
'Sabías que.. En una entrevista hecha a PJ Hyett en 2014, menciona que Tom Preston-Werner (otro cofundador) buscaba una imagen divertida en iStockphoto para la página de error de GitHub, cuando encontró mi imagen entre las miles de imágenes de la plataforma, a Tom Preston le gustan mucho los gatos así que le pareció muy ingeniosa mi imagen, además este tenía tentáculos que parecían ramificaciones salidas de su cuerpo tal cual es la estructura de un repositorio de GitHub, mi imagen le gusto tanto a Tom Preston que lo compro por tan solo 50 dolares, ahora soy una de las imágenes más reconocidas a nivel mundial de una de las compañías con más auge en el mundo.',
];
var result= randD(datos);  
let utterance = new SpeechSynthesisUtterance(result);
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)     
}

if(voz === 'octocat ¿que es GitHub?' || voz === 'octocat Qué es github'){
console.log("Hola, estas preguntando!");
let utterance = new SpeechSynthesisUtterance('GitHub es una plataforma de almacenamiento y desarrollo colaborativo de software ("social coding"), propiedad de Microsoft, que ofrece a los desarrolladores y participantes de la comunidad la posibilidad de crear repositorios de códigos y guardarlos en la nube de forma segura, utilizando un sistema de control de versiones (VCS), llamado Git. Es decir, permite alojar repositorios en la nube para gestionarlos y organizarlos de una mejor manera, con ello se mejorar el flujo de trabajo permitiendo la colaboración de desarrolladores en tiempo real desde cualquier parte del mundo, todo esto de manera gratuita.')
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)     
} 
//interaccion con RA         
if(voz === 'octocat muéstrame a IronCat' || voz === 'octocat Muéstrame a Iron Cat'  || voz === 'octocat Muéstrame a Iron Man'  || voz === 'Muéstrame a Iron Cat' || voz === 'Muéstrame Iron Cat'){
console.log("Estas queriendo visualizar el modelo ironcat");

if(contador ==0){
var el = document.querySelector('#avatar');
  el.setAttribute("src", '#Modelo3D');
  let utterance = new SpeechSynthesisUtterance('Ironcat es un modelo basado en el personaje de ciencia ficcion IRONMAN de Marvel, esta fue renderizada por alumnos del instituo tecnologico de tlaxiaco tomando como referencia la imagen compartida por Cameron McEfee en el octodex, la verdadera identidad de Ironcat sigue siendo un misterio. Tienes idea de quien es?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)    
}

if (contador ==1){
  var el = document.querySelector('#caja');
  el.setAttribute("src", '#Modelo3D');
  let utterance = new SpeechSynthesisUtterance('Nuevamente se hace presente Ironcat. Dicen que es un famoso y multimillonario personaje que ayuda a compartir proyectos y/o repositorios para elaborar trabajos colaborativos. Aun no sabes quien es?. Por cierto su cabeza se parece a la de un gato justiciero. No, no es BATMAN')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
  contador=0;
}
contador++;
console.log(contador);
}

if(voz === 'octocat muéstrame a ironcat más grande' || voz === 'octocat Muéstrame a Iron Cat más grande' || voz === 'Muéstrame a Iron Cat más grande' || voz === 'octocat Muéstrame Iron Cat más grande' || voz === 'Muéstrame Iron Cat más grande'){
console.log("Estas queriendo hacer a ironcat mas grande");             
if(contadorcubogrande ==0){
var el = document.querySelector('#avatar');
  el.setAttribute("scale", '1 1 1');

  let utterance = new SpeechSynthesisUtterance('Ahora Ironcat es más grande pero no me pidas hacerlo de nuevo por que es imposible. ok?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

if(contadorcubogrande ==1){
  let utterance = new SpeechSynthesisUtterance('Amigo, Ironcat no es como ANT-MAN hacerlo más grande hará que explote su traje, además este no podrá volar. ¿Quieres ser el causante de que Ironcat no vuele?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
  contadorcubogrande=0;
}
contadorcubogrande++;
}

if(voz === 'octocat muéstrame a IronCat más pequeño' || voz === 'octocat Muéstrame ironcat más pequeño' || voz === 'octocat Muéstrame a IronCat más pequeño' || voz === 'octocat Muéstrame Iron Cat más pequeño'){
console.log("Estas queriendo a ironcat mas pequeño");
var el = document.querySelector('#avatar');
  el.setAttribute("scale", '0.1 0.1 0.1');

  let utterance = new SpeechSynthesisUtterance('Reduciendo a Ironcat. Ahora Ironcat a vuelto a su tamaño normal para volver a combatir el mal.')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}
if(voz === 'octocat Haz que ironcat desaparezca' || voz === 'octocat Haz que Iron Cat desaparezca'){
console.log("Estas queriendo a ironcat transparente");
var el = document.querySelector('#avatar');
  el.setAttribute("opacity", '0.4');

  let utterance = new SpeechSynthesisUtterance('Ironcat a desaparecido, a utilizado nanotecnologia y muchas librerias que ha econtrado en GitHub')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

if(voz === 'octocat regresa al escenario'){
console.log("Estas queriendo regresar a octocat");
var el = document.querySelector('#avatar');
  el.setAttribute("src", '#Modelo3D');            
  el.setAttribute("scale", '0.1 0.1 0.1');
  el.setAttribute("position", '0 -0.25 0');
  el.setAttribute("rotation", '0 0 0');
 
  var es = document.querySelector('#entityID1').removeAttribute('opacity');


  let utterance = new SpeechSynthesisUtterance('Enseguida amigo. auqnue ya me estoy cansando de esto')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
 
}
if(voz === 'realidad muestra un modelo 3D'){
console.log("Estas mostrando un modelo 3D");
var es = document.querySelector('#entityID1');
  es.setAttribute("obj-model", 'obj:url(samus/DolBarriersuit.obj);mtl:url(samus/DolBarriersuit.mtl)');
  es.setAttribute("scale",'.10 .10 .10');
               

  var el = document.querySelector('#caja');
      el.setAttribute("opacity", '0.0');        
                
  var es = document.querySelector('#entityID2').removeAttribute('gltf-model');
  
  let utterance = new SpeechSynthesisUtterance('ya era hora!. ya me estaba aburriendo de los cubos. Aqui esta tu modelo 3D')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

if(voz === 'realidad muestra un segundo modelo 3D'){
console.log("Estas mostrando un segundo modelo 3D");
var es = document.querySelector('#entityID2');
  es.setAttribute("gltf-model", 'url(llama/scene.gltf)');
                
  var el = document.querySelector('#caja');
      el.setAttribute("opacity", '0.0');       
                
  var es = document.querySelector('#entityID1').removeAttribute('obj-model');

  let utterance = new SpeechSynthesisUtterance('Carlos, mira. Mira, si me preguntas no se cual modelo 3D me gusta mas.')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

console.log('Confidence: ' + event.results[0][0].confidence);
}


recognition.onspeechend = function() {
recognition.stop();
}

recognition.onnomatch = function(event) {
diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
//diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
}

recognition.onerror = function(event) {
diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
//diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
}


