const config = {
    // La contraseña de acceso.
    TARGET_DATE: '220626',

    LOVE_DECLARATION: `Cada rincón del universo observable parece 
                        pequeño cuando se compara con la inmensidad 
                        de la perfección de tu mente y la fuerza de tu espíritu. 
                        Dicen que las estrellas son los motores más 
                        brillantes del cosmos, pero ninguna 
                        en la historia del tiempo tiene ni tendrá la inteligencia, la 
                        autenticidad y la magia que desprendes tú con 
                        tu sola existencia, por esa sencilla razón las 
                        estrellas no brillan tanto como tú. Eres un centro de energía 
                        propia, un ser deslumbrante que, con su firmeza,
                        su inteligencia y su valentía, desafía 
                        cualquier caos del mundo exterior. Tu vida tiene 
                        un resplandor único y un valor incalculable por lo que eres, 
                        por tu capacidad de brillar y por la huella tan bonita 
                        que dejas en el tiempo. Celebrar tu existencia es celebrar 
                        el fenómeno más hermoso del universo, hoy y por siempre.`,

    REASONS: [
        "Amo la forma en que tus ojos brillan cuando hablas de lo que te apasiona; iluminan mi mundo entero.",
        "Amo tu fuerza inquebrantable. Eres la mujer más valiente que conozco, capaz de enfrentar cualquier tormenta.",
        "Amo cómo tu risa tiene el poder absoluto de borrar cualquier rastro de tristeza en mi día.",
        "Amo la paz que encuentro en tus abrazos, como si de repente, todo el ruido del exterior desapareciera.",
        "Amo cómo me miras cuando crees que no me doy cuenta. Esa mirada silenciosa lo dice todo.",
        "Amo tu inteligencia y la forma tan única en la que tu mente resuelve los misterios de la vida.",
        "Amo cada pequeño esfuerzo que haces a diario para que lo nuestro sea más fuerte, puro e invencible.",
        "Amo la melodía de tu voz. Es mi sonido favorito, capaz de calmar el caos más profundo de mi mente.",
        "Amo cómo conviertes las cosas ordinarias en momentos extraordinarios, mágicos y dignos de recordar.",
        "Amo tu manera de cuidarme; me haces sentir el hombre más afortunado y protegido de la existencia.",
        "Amo que podamos hablar durante horas sobre todo o sentarnos en silencio sin sentir ninguna distancia.",
        "Amo la curva de tu sonrisa, esa pequeña obra de arte que me desarma por completo cada vez.",
        "Amo tu autenticidad. Nunca dejas de ser tú misma, y esa esencia tuya es lo que me cautivó desde el inicio.",
        "Amo que, entre miles de millones de almas y probabilidades infinitas, nos hayamos encontrado. Te amo porque eres tú.",
        "Amo ver cómo te concentras cuando estás estudiando o resolviendo un problema difícil; te ves tan hermosa y decidida.",
        "Amo la paciencia infinita que tienes conmigo en mis días más caóticos y nublados.",
        "Amo cómo tu mano encaja perfectamente con la mía, como si hubieran sido diseñadas para estar juntas.",
        "Amo el orgullo que siento en el pecho cada vez que te veo lograr una meta o superar un obstáculo.",
        "Amo que tu felicidad sea mi prioridad número uno y que ver tu sonrisa sea el mejor premio de mi día.",
        "Amo los planes que hacemos para el futuro, porque en cada uno de ellos estás tú tomándome de la mano.",
        "Amo que contigo puedo ser completamente yo mismo, sin filtros, sin miedos y con el corazón abierto.",
        "Amo tu madurez y la forma tan sabia en la que guías nuestros pasos cuando el camino se pone difícil.",
        "Amo tu empatía y ese corazón tan grande que tienes, que siempre busca el bienestar de los que amas.",
        "Amo cómo hueles cuando te acercas a saludarme; es un aroma que mi memoria tiene grabado como 'mi hogar'.",
        "Amo que tus abrazos tengan el superpoder de recargar mis energías cuando siento que ya no puedo más.",
        "Amo ver cómo defiendes tus ideas y tus sueños con tanta convicción; me inspiras a ser mejor cada día.",
        "Amo la calidez de tu piel cuando nos acurrucamos a descansar después de un día agotador.",
        "Amo que seas mi compañera de batallas, mi confidente, mi novia y mi mejor amiga, todo en una sola persona.",
        "Amo la forma en que suavizas mis bordes ásperos con tu dulzura y tu infinita ternura.",
        "Amo cómo te preocupas por los pequeños detalles de mi vida, cosas que a veces yo mismo olvido.",
        "Amo la ilusión que me da despertar sabiendo que existes y que formo parte de tu vida.",
        "Amo tu sentido del humor, incluso esos chistes o momentos raros que solo nosotros dos entendemos.",
        "Amo cómo tu sola presencia le da estabilidad y sentido a mi rutina diaria.",
        "Amo imaginar tu rostro iluminado por la pantalla del teléfono cuando nos desvelamos hablando de la vida.",
        "Amo que no le temas a los retos y que veas cada dificultad en la universidad o en la vida como un escalón más.",
        "Amo la forma en que me haces querer superarme constantemente, solo para estar a la altura de la increíble mujer que eres.",
        "Amo cuando te recoges el cabello sin darte cuenta; es un gesto tan simple pero me parece de lo más hermoso.",
        "Amo que respetes mis espacios de la misma manera en que yo adoro ver cómo brillas en los tuyos.",
        "Amo la sensación de seguridad que me da saber que, pase lo que pase en el mundo exterior, en tus ojos tengo un refugio.",
        "Amo cuando me cuentas tus miedos más profundos, porque me da la oportunidad de prometerte que los venceremos juntos.",
        "Amo la delicadeza de tus gestos y la firmeza de tus decisiones; eres un equilibrio perfecto.",
        "Amo cómo manejas las situaciones complicadas con una gracia y una templanza que me dejan sin palabras.",
        "Amo tu voz cuando nos saludamos por primera vez en el día, con ese tono bajito y dulce que me hace desear que el tiempo se detuviera ahí.",
        "Amo que me dejes apoyarte en tus días difíciles, recordándote lo valiosa y capaz que eres cuando tú lo olvidas.",
        "Amo cómo se siente planificar un día entero a tu lado, sabiendo que cualquier lugar es perfecto si es contigo.",
        "Amo esa forma tan tierna en la que sonríes cuando estamos enojados pero no puedes evitar reírte.",
        "Amo que compartamos sueños tan grandes y que tengamos la certeza de que trabajaremos duro para alcanzarlos.",
        "Amo cómo se siente extrañarte, porque me recuerda la inmensa fortuna que tengo de tener a alguien tan especial a quien echar de menos.",
        "Amo que me hayas enseñado lo que significa el amor real: ese que no es perfecto, pero que se elige y se cuida todos los días.",
        "Amo ver la pasión con la que defiendes lo que consideras justo; tu brújula moral es algo que admiro profundamente.",
        "Amo cómo tus palabras de aliento tienen el peso exacto para levantarme el ánimo cuando dudo de mí mismo.",
        "Amo que caminar a tu lado me haga sentir que el mundo no es tan gris ni tan difícil como a veces parece.",
        "Amo tus manías, tus costumbres y todo ese conjunto de pequeños detalles que te hacen ser la única dueña de mi corazón.",
        "Amo cuando suspiras profundamente y te apoyas en mi hombro; siento que confías en mí para sostener tu mundo.",
        "Amo la forma en que tus ideales y metas enriquecen mi vida y amplían mis propios horizontes.",
        "Amo que me conozcas tanto que sepas exactamente qué necesito escuchar (o cuándo necesito un silencio) sin que diga nada.",
        "Amo tu elegancia natural; tienes una forma de andar y de ser que ilumina cualquier habitación en la que entres.",
        "Amo la alegría genuina que sientes por los logros de los demás; eso demuestra la pureza de tu corazón.",
        "Amo la tranquilidad que me da saber que eres mi equipo, mi soporte y mi cable a tierra en este mundo tan loco.",
        "Amo cuando te quedas dormida a mi lado y puedo contemplar la paz de tu rostro; es el paisaje más hermoso del universo.",
        "Amo que no necesitemos grandes lujos ni dinero para pasar el mejor día de nuestras vidas; bastamos tú, yo y nuestras risas.",
        "Amo la frescura que le aportas a mi vida, como un soplo de aire limpio en medio de la rutina y el estrés.",
        "Amo la forma en que me miras cuando me dices que me amas; puedo sentirlo vibrar directamente en mi pecho.",
        "Amo que seas una mujer con metas claras y que no te rindas, incluso cuando la carga académica o el cansancio aprietan.",
        "Amo el sonido de tus pasos acercándose a mí; mi corazón reconoce ese ritmo instantáneamente.",
        "Amo que sepas descifrar mis estados de ánimo con solo ver el tono de un mensajes.",
        "Amo tu cabello, la forma en que se mueve y cómo se siente entre mis dedos cuando te acaricio la cabeza.",
        "Amo que me dejes ser tu protector en lo físico y tu apoyo en lo emocional, de la misma forma en que tú me salvas a mí a diario.",
        "Amo la madurez con la que hablas de tus sentimientos, permitiéndonos construir sobre una roca sólida.",
        "Amo que cuando me abrazas por encima de los hombros, siento que todas las piezas rotas de mi día se acomodan en su lugar.",
        "Amo tu mirada profunda, esa que parece leer mi alma entera y aceptar cada parte de lo que soy.",
        "Amo cuando no te guardas los abrazos ni los besos cuando estamos juntos; tus demostraciones de amor me llenan la vida.",
        "Amo la calidez de tus palabras cuando me despides por las noches; hacen que me duerma con una sonrisa.",
        "Amo cómo te ves con cualquier ropa, despeinada, arreglada, cansada o llena de energía; para mí eres perfecta en cada faceta.",
        "Amo que seas la primera persona en la que pienso cuando me pasa algo bueno, porque sé que lo celebrarás más que nadie.",
        "Amo cuando te pones pensativa y miras al horizonte; me da curiosidad saber qué universo estás construyendo en tu mente.",
        "Amo que hayamos aprendido a pedir perdón y a sanar juntos; eso demuestra que nuestro amor es más grande que cualquier orgullo.",
        "Amo la seguridad con la que me hablas del mañana, dándome la certeza de que tu amor no es pasajero.",
        "Amo cómo se siente tomar tu mano mientras caminamos por la calle; es mi forma favorita de decirle al mundo que soy feliz.",
        "Amo tu forma de expresarte, tus palabras exactas y la dulzura con la que defiendes tus puntos de vista.",
        "Amo el espacio que ocupas en mi vida; llenaste un vacío que ni siquiera sabía que existía.",
        "Amo que compartas conmigo tus canciones favoritas, porque al escucharlas siento que me dejas asomarme a tu mundo interior.",
        "Amo la honestidad inquebrantable de tus ojos; en ellos nunca hay mentiras, solo transparencia.",
        "Amo que me permitas ser el guardián de tus secretos y el hombro en el que puedes llorar cuando el mundo pesa demasiado.",
        "Amo cómo tu sola existencia le da un brillo diferente a mis días más oscuros y monótonos.",
        "Amo la forma en que me haces sentir amado, valorado y respetado en cada pequeño gesto cotidiano.",
        "Amo que seas mi motivación silenciosa para levantarme cada mañana a construir un futuro donde no te falte nada.",
        "Amo tu capacidad de adaptación y tu resiliencia ante los cambios que nos impone la vida.",
        "Amo los recuerdos que ya tenemos acumulados y la emoción de saber que apenas estamos escribiendo los primeros capítulos.",
        "Amo que seas mi amor eterno, mi niña consentida y la persona con la que quiero compartir absolutamente cada latido.",
        "Amo todo lo que eres, todo lo que fuiste y todo lo que seremos juntos. Te amo con una fuerza que trasciende el universo entero.",
    ],

    GALLERY_IMAGES: [
        { url: 'img/foto1.jpg', caption: 'Esos hermosos momentos cuando eramos recien novios que guardo como un tesoro, eramos super jovenes y apesar de eso no dudamos ni un segundo que lo nuestro seria para siempre .' },
        { url: 'img/foto2.jpg', caption: 'Estar contigo es como estar en un cuento de hadas, cada dia me enamoro mas de tí, quizá no todos los días son perfectos, pero tú sí eres perfecta todos los días, mi vida.' },
        { url: 'img/foto3.jpg', caption: 'Tu sonrisa, mi paisaje favorito en este y cualquier universo, verte sonreir me hace infinitamente feliz, mi sueño es que esa sonrisa se mantenga en tu rostro por el resto de nuestras vidas.' },
        { url: 'img/foto4.jpg', caption: 'Nuestro aniversario, mi amor, un dia que jamas olvidare, se que no fue perfecto pero en mi corazón siempre sera un momento especial y muy muy hermoso.' },
        { url: 'img/foto5.jpg', caption: 'Esos hermosos dias en los que cocinabamos juntos y comiamos cositas que nos hacian felices, en un futuro quiero que sigamos haciendo muchas cosas juntos, mi amor.' },
        { url: 'img/foto6.jpg', caption: 'Esa bella foto que me pasaste el día que nos hicimos novios, no sabes cuanto amo esa foto y los recuerdos que me trae, sobretodo porque me deja ver con plenitud la hermosura de tus bellos ojos marrones.' }
    ]
};

Object.freeze(config);
Object.freeze(config.REASONS);
Object.freeze(config.GALLERY_IMAGES);

export default config;
