const gallery = document.getElementById("gallery");
const fullImageElement = document.getElementById("img-lightbox");
const description= document.getElementById("description");
const flechaarriba= document.getElementById("flechaarriba");
const flechaabajo= document.getElementById("flechaabajo");
const thumbnails= [
 {img: "img/semaforo.PNG", alt: "Team semaforo" , description: "Esta fue la primera vez que te conocí, jaja no recordaba que así se llamaria el grupo al inicio, quien lo diria que Anghie nos juntaria a nosotros que vivimos tan lejos 😂"},
 {img: "img/primerchat.PNG", alt: "Primer chat" , description: "Luego.. te juro que no te hubiera hablado por mi cuenta porque soy muy timido, pero que bueno que me respondiste mi estado, al menos Castillo hizo algo bueno"},
 {img: "img/caritas.PNG", alt: "Caritas Random" , description: "Menos mal saque estas fotos antes que se pierda mi celu 😂, recuerdo que en el ICPNA siempre teniamos cara de sueño jaja.. Y asi fue como poco a poco de ser solo un grupo para hablar spanglish, nació una bonita amistad"},
 {img: "img/lomasmirador.PNG", alt: "Primera Salida" , description: "De pronto llego el momento de conocernos en persona, gracias Karen en donde sea que estes 😂, pero tu cerrito si que fue una primera y muy bonita aventura y me permitió conocer a la gran y única Rebe 😳"},
 {img: "img/jalar.PNG", alt: "Bromas pesadas" , description: "En una de esas clases del ICPNA pude conocer tu lado diabólico, aun recuerdo esa vez que estabamos con Anghie rogandole al profe para que no jales el curso y tu ya habias aprobado 🙃"},
 {img: "img/halloween.PNG", alt: "Halloween" , description: "Fue entonces, que fue Halloween y se me ocurrio la idea que podiamos salir de fantasmas 👻, hice que mas personas se unan al trend 😂, y fue una noche bonita, lastima que no fuimos al parque de las aguas, pero el picnic fue bonito y salieron buenas fotos y un tiktok de paso (mis primeros tiktoks jaja)"},
 {img: "img/robo.PNG", alt: "Robo" , description: "Lamentablemente, todo no podia salir bonito ese dia, los malditos choros tenias que robarte 😔 y ahi fue que me escribiste desde tu otro numero contandome eso y trate de ayudarte, porque de verdad me dio mucha colera que te hayan robado, quien diria que luego el destino haria que a mi me pase lo mismo 😔.. Al menos pude conocer ahi tu otro numero"},
 {img: "img/marcona.JPG", alt: "Marcona" , description: "Luego llego el 2022, terminamos el ICPNA y empezaba una nueva etapa para todos nosotros, sin embargo, fue bonito que a pesar de terminara todo aun mantuvieramos contacto, no siempre ocurre eso y menos en clases virtuales, pero bueno en fin.. justo ahi fui de viaje a Marcona por primera vez (que por cierto debemos ir si o si algun dia) y deje el nombre del grupo en lo alto 😊"},
 {img: "img/tiktok.PNG", alt: "Tik tok" , description: "Luego en unos de esos dias random, descubri tu tiktok y ahi seria el inicio de las etiquetadas 😂, no se en cuantos tiktoks nos habremos etiquetado, pero bueno de ahi salieron buenas ideas de lugares y alguno que otro video cute 😊. Psdt: Wtf ya me habia olvidado, pero te puse Elsa a tu chat lol recuerdo que era una forma de ponerte un apodo asi como tu me decias Copito, pero de ahi me confundia cuando te buscaba en mis chats y te cambie de nuevo a Rebe jaja"},
 {img: "img/naruto.PNG", alt: "Naruto" , description: "Luego despues de tiempo llego por fin una salida, esta vez fue algo improvisado lleve a mi amigo Gian y fuimos a Naruto Ramen, recuerdo que esa vez lamentablemente no lo disfrute como deberia ser por estar en mi celular (una pelea que tuve), sin embargo ya en la playita todo fue mas relax y comprendi lo tonto que estaba siendo, y que debia disfrutar del momento y no estar pensando en cosas ajenas a ello y mas aun siendo una salida, que no se daba hace mucho tiempo. Te pido disculpas por ello nuevamente... 😔"},
 {img: "img/freefire.JPG", alt: "Free fire" , description: "Empezamos a conversar mucho recuerdo al punto que una vez incluso jugamos <br/> Free fire jaja y bueno mori muchas veces, luego seria lo mismo con Mobile <br/> Legends, lo malo no tome foto de eso ups 🙃.. igual a pesar de jugar mal, <br/> disfrute de esas partidas 😊. Psdt: dale click a la siguiente foto, la Becky de la foto salio muy grande jaja y ocupa mucho espacio que hace que la pagina se bugee 😂"},
 {img: "img/graduacion.JPG", alt: "Graduacion" , description: "Luego en Mayo llego mi graduacion, recuerdo que te invite, a Anghie tambien pero no pudieron ir 😔, igual algo que si me parecio cute y bonito y lamentablemente no tengo foto de eso, pero si lo recuerdo es que viste la transmision de la graduacion e incluso me felicitaste en tus estados, eso me parecio algo muy bonito y si bien te lo dije en su momento, igual te vuelvo a agradecer por ello, y mas aun que en esos momentos me sentia completamente solo y que a nadie le importaba mi vida 😔"},
 {img: "img/reencuentro.PNG", alt: "Reencuentro" , description: "Despues de eso, pasaron muchos meses, me robaron mi S21 y muchas cosas mas, tu ya estabas trabajando en tu 'trabajo secreto' que era la veterinaria, y bueno por fin en agosto se pudo dar una salida, fuimos a Barranco y bueno fue un momento bien bonito la verdad, lo que no fue bonito es que me castigaras con comer palta jaja 🙃 Pero bueno.. ahi estaba en mood editor jaja me acuerdo que hice un edit de tu foto incluso 😂"},
 {img: "img/playita.PNG", alt: "Ancon" , description: "A la siguiente semana salio por fin el primer 'viajecito', fue un Fullday en Lima pero igual se disfruto bastante, ya que fuimos a la playita, hicimos un castillo de arena, fuimos en una lancha a pasear, tomamos unos drinks y hicimos karaoke wooow fueron varias cosas, y se disfruto bastante, incluso te olvidaste tu celu y me asuste porque no queria que lo bloquearas 🙃, menos mal te lo pude devolver al dia siguiente"},
 {img: "img/precoldplay.PNG", alt: "Pre Coldplay" , description: "Paso maso un mes y despues se anuncio que Coldplay venderia mas entradas, y ni bien escuche eso y sabia encima que irias tu, me puse pilas y trate de conseguir mi entrada, es curioso porque pude comprarlo antes cuando salio al inicio, pero dije nahhh no soy fan jaja pero wow los tiktoks me hicieron ver que era el reaaaal concierto... Luego empezamos a planear como serian los outfits ya que justamente iba a ser nuestro primer concierto 😳"},
 {img: "img/outfit.PNG", alt: "Outfit" , description: "Esa salida para los outfits fue algo dificultosa para mi, porque tenia Helpdesk en mi trabajo (emergencias) pero supe cobrar un favor y asi pude ir a ver los outfits, tenia lo malo solo 4 horas, pero aun asi pudimos encontrar masomenos lo que buscabamos y luego de paso salio una salidita al museo a esa expo de Luces que wooow estaba hermosooo 😳, salieron fotitos cheveres ahi y pude disfrutarlo y encima ya estabamos readys para Coldplay!!"},
 {img: "img/coldplay.PNG", alt: "Coldplay" , description: "Luego llego el dia esperado, nuestro primer conciertooo!!!.... me alegro bastante que ese haya sido mi primer concierto, porque si bien Bad Bunny tambien fue chevere, no puedo comparar las luces, y lo magico que se sintio ese feeling de Coldplay, es un momento que siempre lo tendre en mis memorias 😊 fue el reaaaaaaaal concierto"},
 {img: "img/notecaigas.JPG", alt: "No te caigas" , description: "Recuerdo este momento tambien, estaba en la mina y estaba con muchos demonios, inseguridades, llorando y mas cosas en mi mente... y apareciste ahi, aunque no lo creas esas palabras fueron un alivio para mi en ese momento... ahi te digo tambien que lo mismo va para ti, nunca pienses que lo que hacemos no ayuda a las otras personas, a veces esas pequeñas acciones significan bastante para otras personas 🥺"},
 {img: "img/miedo.PNG", alt: "Miedo a perderte" , description: "Luego llego un momento sad y un punto y aparte... en esas fechas estabas sad, demasiado y fue tanto que empezaste a colocar estados muy sad durante toda la noche y dije.. 'hey algo aqui esta mal', quise llamarte pero soy algo timido para las llamadas y bueno hice lo que en ese momento mejor podia hacer mandarte alguno que otro mensaje de aliento, tiktoks bonitos que habia encontrado e incluso hice un tiktok para poder animarte.. luego al dia siguiente me asustaste mucho porque me jugaste una broma muy pesada la verdad, pero no importa eso.. el punto es que imaginarme una vida sin que estuvieras ahi me partio el corazon 😔, recuerdo que incluso iba a ir hasta donde estabas sin saber donde vivias ni si quiera.. pero bueno al menos no paso nada malo y estas aqui 🥺"},
 {img: "img/empatia.JPG", alt: "Empatia" , description: "Luego pasando unas semanas, llego otro momento sad en este caso para ti.. justo fue el anuncio de separacion de BTS y encima tu hermana se iba de viaje luego.. fue algo sad porque ya no podria hablar contigo en un buen tiempo... pero fue ahi que por fin comprendi al maximo la empatia ya que pude ver lo que era BTS para tu life... lo que para muchos seria simplemente un grupo coreano mas, para ti era tu vida entera y en base a eso me anime y hice un videito hablando de eso.. fue mi primer podcast 😂, te agradezco que me hayas enseñado esa leccion de vida"},
 {img: "img/badbunny.PNG", alt: "Bad bunny" , description: "Luego despues de meses llego por fin una salidita, ya estabas un poco mejor lo bueno y con Anghie quedamos una salida, fue justo un dia antes del concierto de Bad Bunny ya estaba con el outfit y todo en mente, pero igual primero era esa salidita y si bien no fuimos a los patines, igual se disfruto, y si ahi supiste que le tengo miedo a los perros jaja 🙃"},
 {img: "img/flying.JPG", alt: "Flying Squirrel" , description: "Luego despues de unas semanas, llego por fin el turno de poder salir a una salidita de tiktok que si bien no fue el Parque de Las Leyendas, fue mas bonito creo y fuimos al Flying Squirrel, si bien ya habia ido ahi, queria que tuvieras esa experiencia tambien y lo disfrute mucho la verdad, salio bonita foto del Starbucks, y si... aun esta pendiente ese Starbucks de la Barbie ah 🙃"},
 {img: "img/cumple.JPG", alt: "Cumple" , description: "Luego llego mi cumple, hice una de mis mayores locuras y alquile un yate jaja 😂, y hice algo que debi hacer siempre y es invitarte a ti y Anghie a mi cumple, el año anterior, no lo hice y me arrepenti de eso.. Me alegro bastante que hayas podido ir, porque se que era dificil por tu trabajo.. pero aun asi fuiste y eso lo aprecio bastante, me gusto tu torta aunque hubiera preferido comerla de forma normal jaja pero bueno fue divertido, y salieron fotos hermosas en el sunset... la verdad ese cumple fue el mejor que he tenido hasta la fecha, ya ni se si el de este año le vaya ganar 😂"},
 {img: "img/patines.JPG", alt: "Patines" , description: "Llego el 2023 bien cabron contigo y un blunt 😂, y por fin fuimos a los patines que quedo pendiente y la verdad lo disfrute bien, tambien por fin pudimos ir a tomar unos drinks por ahi despues de uff.. ese dia tambien por fin pude conocer como era Horacio y bueno espero algun dia volver para que me muestres sus points, porque debe tener alguno que otro 😳"},
 {img: "img/bts.PNG", alt: "BTS" , description: "Este mes a inicios llego el concierto de BTS el Yet to Come 😳, sabes... nunca hubiera pensado en ir antes en toda mi vida a un concierto de BTS, pero ese dia cuando me dijiste que justo irias y encima dijiste que te cancelo tu amiga, dije vamos y no me arrepiento para nada, lo disfrute bonito, vi por fin a lo que te referias con los mensajes que tenian en sus canciones, y porque era tu grupo favorito, fue bonito verte feliz ademas, toda una bonita experiencia la verdad 😊"},
 {img: "img/carnaval.JPG", alt: "Carnaval" , description: "Y bueno la ultima foto, este dia no fue tan bonito para mi la verdad al inicio paso muchas cosas con ese evento que no me dejaron entrar, me habia peleado con mi mejor amiga, luego la policia y te soy sincero tambien me sentia angustiado porque me importaba bastante que esten bien, que tu estes bien mas que nada... pero lo bueno es que no paso nada malo y todo salio bien, cuando llegaron ya fue mas bonito todo y me diverti mucho, la primera vez que ibamos a una disco, faltaba ese lokeo 🥺... Y bueno ahi termina esta recapitulacion de las cosas importantes de la life y como pasaste a formar parte como alguien importante en mi life pequeña Rebe"},
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