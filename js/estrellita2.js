const gallery = document.getElementById("gallery");
const fullImageElement = document.getElementById("img-lightbox");
const description= document.getElementById("description");
const flechaarriba= document.getElementById("flechaarriba");
const flechaabajo= document.getElementById("flechaabajo");
const thumbnails= [
 {img: "img/mariposa.jpeg", alt: "Mariposa" , description: "Aun recuerdo ese dia en mi mente 24 de sFebrero 2023, como te decia, para mi tus cumpleaños siempre han sido dias especiales, y como no podia ser la excepcion te quise dar ese datalle y cenar con mariposas, aun guardo ese dia en mi mente, el poder sacarte una sonrisa en tu dia especial, fue algo bonito de ver."},
 {img: "img/chino.jpeg", alt: "Parque Chino" , description: "El ver nuevos lugares era algo que siempre disfrutaba, en esa parte me recuerdas mucho a mi, siempre has tenido esa emocion por conocer nuevos lugares, sin embargo en esta ocasion habia una noticia que cambiaria todo y es que aqui te di la noticia que me iria a Francia a seguir la maestria, y pues.. un picnic bonito pero esa noticia ponia emotiva las cosas, sin embargo aqui salio la idea del viaje a Colombia y pues al menos algo bonito para que no termine ese dia con caras tristes. Ah y aun recuerdo que esa vez nos pusimos a hacer un tiktok con voz de OSEA MANYAS 😂"},
 {img: "img/baile.jpeg", alt: "Baile" , description: "Aun recuerdo ese dia jaja 😂, quedaba pendiente luego del carnaval fallido el salir a divertirse y bailar, no soy bueno bailando tbh tengo mala coordinacion con los pasos, pero eso era lo de menos, el pasar ese tiempo ahi contigo y Anghie fue algo muy bonito, hasta recuerdo que me estabas enseñando algo de salsa jaja pero tambien hubo momentos emotivos, y pues si.. ya se acercaba pronto este alejamiento y poner pausa a aquellas salidas por un tiempo 🥺 pero bueno, aqui estamos 2 años despues y seguimos aqui. PSDT: hace falta otro baile otro dia jaja y unos drinks, espero haber mejorado con los pasos 😂"},
 {img: "img/barbie.jpeg", alt: "Barbie" , description: "Quedaba ya poco tiempo para el viajecito a Colombia y debiamos ponernos al dia, entonces salio esta idea de conversar sobre el viaje y probar lo del Frapu de la Barbie que estaba rico por cierto 😂, ese dia tambien pude saber que se venia el periodo de la arquitecta Becky 😳, por esas fechas lo tenias como secreto pero por fin me entere de esa gran idea y pues estoy muy feliz que estas siguiendo tus sueños, nunca te rindas y siempre esfuerzate, se que seras una de las mejores arquitectas 😊. PSDT: Ese dia recuerdo que por fin pude conocer Horacio, espero algun dia poder visitarte, queda pendiente que me des un tour por tu barrios ya sabes jaja"},
 {img: "img/colombia.jpeg", alt: "Colombia" , description: "Y de pronto llego el tan ansiado viaje, estaba muy feliz que por fin pudieras viajar en avion y tuvimos nuestra experiencia de mochileros, esos dias fueron muy magicos, conocimos muchos lugares y ese viaje como te digo esta entre los mas arriba de mi top, por todas las experiencias que pudimos vivir y que aun siguen en mi memoria, hace falta algun dia otro viajecito 😊 PSDT: Gracias por enseñarme el tallarin con atun, lit esa fue mi primera comida y bueno si te prometo que si alguna vez hay la oportunidad, esta vez yo te sorprendere con alguna comida jaja ya se cocinar mejor"},
 {img: "img/ultimosdias.jpeg", alt: "Ultimos dias" , description: "Aun recuerdo estos dias, luego de Colombia, ya llegaban los vibes de despedida 😔 y justo por estas fechas ya iniciabas tus clases, por fin Becky vendria mas seguido al cono norte, pero ahora ya no podria estar ahi para enseñarte alguno de mis points, asi que en esas 2 ultimas 2 semanas antes de irme, fui a visitarte afuera de tu universidad y luego a comer y un rato disfrutar de las ultimas salidas. PSDT: ya he mejorado con los palitos jaja en estas fechas no sabia usarlos, ah y tambien aun tengo esos ositos Escandolosos que me regalaste, siempre lo uso para apoyar mi celu 😊"},
 {img: "img/despedida.jpeg", alt: "Despedida" , description: "LLego el dia de la despedida 😔 este dia fue muy emotivo, el despedirse de las personas que mas amas y el irte solo a un nuevo pais era algo que fue dificil de afrontar, te agradezco el que hayas podido ir esa vez, y ahi salio lo de las huellitas que aun lo tengo y luego lo pudimos completar, pero bueno igual... momentos emotivos"},
 {img: "img/primerosanos.jpeg", alt: "Primeros años" , description: "Esos primeros dias fueron dificiles, pero pude superarlos, te agradezco mucho por ayudarme en alguno de esos momentos, ese tallarin con atun que te comentaba me salvo como mi primera comida aquella vez, luego recuerdo que no sabia usar la lavadora y me pudiste enseñar un poco a usarla, y bueno aquellas primeras llamadas a la distancia, te respondi tambien aquel mensaje del album de fotos, y pues aun como te digo espero poder ir a tu graduacion, se que lograras todas tus metas 😊"},
 {img: "img/madurar.jpeg", alt: "Adaptarse" , description: "Te agradezco mucho esos primeros meses en ayudarme indirectamente a no sentirme solo, si bien no conversabamos muy seguido, recuerdo que por estas fechas comence un mini proyecto para tu cumple del 2024, y empece a grabar pequeños videos de los lugares que conocia en Francia, y pues... gracias! senti asi al menos que los visitaba como si estuvieras ahi, y eso me ayudo a no sentirme tan solo al visitar esos lugares."},
 {img: "img/francia.jpeg", alt: "Francia" , description: "Pasaron algunos meses en el 2024 y si bien ya no conversabamos tan seguido, fui empezando a madurar y adaptarme a esta nueva etapa, se que tu tambien creciste mucho por estas fechas y bueno estoy muy orgulloso y te tomo siempre de ejemplo para no rendirme como te digo siempre"},
 {img: "img/regreso.jpeg", alt: "Regreso" , description: "Llego de pronto la fecha del tan ansiado regreso, era algo que esperaba con muchas ansias, quise sorprenderte y caer de sorpresa a tu universidad, pero no salio tan bien que digamos 😂. Espero si se da la oportunidad nuevamente, ahora si pueda hacerlo, pero bueno... te pude llegar a visitar en 2 ocasiones por esos primeros dias y pues fue bonito el volverte a ver, y ver como avanzabas poco a poco en todo, es una lastima que por estas fechas estabas muy ajetreada con todo y luego de ello ya no pudimos salir hasta luego de 3 meses, pero comprendo en verdad la carga que pasas y bueno me alegra que hayas podido superar todo ello y hayas podido avanzar 😊"},
 {img: "img/picnic.jpeg", alt: "Picnic" , description: "Llego setiembre nuevamente y con ello el regreso a Francia 😔, se respiraba nuevamente el ambiente de despedida 😔, pero bueno pudimos tener un bonito picnic y una pijamada con Anghie, esos recuerdos que se crearon esas fechas fueron bonitos, y aun tengo esos dibujitos que hicimos aquella vez, no soy un gran pintor pero bueno jaja bonitos momentos igual"},
 {img: "img/alejamiento.jpeg", alt: "Alejamiento" , description: "Luego de regresar a Francia, paso algo distinto a la primera vez que vine... deje de insistir con las personas, vi como mi circulo que ya era pequeño, se volvia aun mucho mas pequeño, como proteccion ante ello empece a priorizarme y el poner una barrera para no sentir dolor de que mi circulo se cerraba mas, visite muchos lugares bonitos, pero si... eso conllevo tambien a que me aleje de ti por un tiempo al igual que de varias personas, se que nuestra amistad es como un cactus y por esas fechas no estabas muy bien, pero igual te agradezco el que luego regreses, siempre me va a costar el entender cuando te alejas, pero prometo tratar de entenderte, es justo la empatia y gracias por ayudarme a ser mas empatico."},
 {img: "img/racha.jpeg", alt: "Racha" , description: "Y por ultimo llegamos al presente, aun no se como paso pero empezamos a conversar seguido y hasta tenemos racha y mascota jaja Mochii ya casi sube de nivel jaja, pero bueno espero algun dia poder reclamar alguna comida gratis jaja pero mas aparte de todo ello, es que ultimo te siento muy cerca y pues a pesar de la distancia se que pronto nos podremos reencontrar nuevamente, hasta ello, espero sigas creciendo, te quiero mucho, nunca te rindas en nada Becky ⭐"},
 ];

var i=0
var active=0
for (i; i<active+3; i++){
    const img= document.createElement("img");
    img.src= thumbnails[i].img;
    img.alt= thumbnails[i].alt;
    img.id= i
    gallery.appendChild(img);
    img.addEventListener("click",function(){
        fullImageElement.src = this.src;
        fullImageElement.alt = this.alt;
        description.innerHTML= thumbnails[this.id].description;
    });
}

flechaabajo.addEventListener("click",function(){
    if(i<23){
        active=i;
        gallery.innerHTML='';
        for (i; i<active+3; i++){
            const img= document.createElement("img");
            img.src= thumbnails[i].img;
            img.alt= thumbnails[i].alt;
            img.id= i
            gallery.appendChild(img);
            img.addEventListener("click",function(){
                fullImageElement.src = this.src;
                fullImageElement.alt = this.alt;
                description.innerHTML= thumbnails[this.id].description;
            });
        }
        if(i>=3 && flechaarriba.childNodes.length==3){
            const imgflechaarriba= document.createElement("img");
            imgflechaarriba.src='img/flechaarriba.png';
            imgflechaarriba.alt='anterior';
            imgflechaarriba.id='arriba';
            flechaarriba.appendChild(imgflechaarriba);
        }
        if(flechaarriba.childNodes.length==0){
            const imgflechaarriba= document.createElement("img");
            imgflechaarriba.src='img/flechaarriba.png';
            imgflechaarriba.alt='anterior';
            imgflechaarriba.id='arriba';
            flechaarriba.appendChild(imgflechaarriba);
        }
    }else{
        active=i;
        gallery.innerHTML='';
        for (i; i<active+2; i++){
            const img= document.createElement("img");
            img.src= thumbnails[i].img;
            img.alt= thumbnails[i].alt;
            img.id= i
            gallery.appendChild(img);
            img.addEventListener("click",function(){
                fullImageElement.src = this.src;
                fullImageElement.alt = this.alt;
                description.innerHTML= thumbnails[this.id].description;
            });
        }
        flechaabajo.innerHTML='';
    }
})

flechaarriba.addEventListener("click",function(){
    if(active>=3){
        i=active-3;
        active=i;
        gallery.innerHTML='';
        for (i; i<active+3; i++){
            const img= document.createElement("img");
            img.src= thumbnails[i].img;
            img.alt= thumbnails[i].alt;
            img.id= i
            gallery.appendChild(img);
            img.addEventListener("click",function(){
                fullImageElement.src = this.src;
                fullImageElement.alt = this.alt;
                description.innerHTML= thumbnails[this.id].description;
            });
        }
        if(active<23 && flechaabajo.childNodes.length==0){
            const imgflechaabajo= document.createElement("img");
            imgflechaabajo.src='img/flechaabajo.png';
            imgflechaabajo.alt='siguiente';
            imgflechaabajo.id='abajo';
            flechaabajo.appendChild(imgflechaabajo);
        }
        if(active==0){
            flechaarriba.innerHTML='';
        }
    }
})

function openPopup() {
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  function continueStory() {
    window.location.href = "album.html"; // Redirigir a la nueva página
  }

  // Mostrar el popup después de 3 segundos
  setTimeout(openPopup, 3000);