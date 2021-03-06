const words = [
  { spanish: [`partido`], english: [`match`] },
  { spanish: [`hoy`], english: [`today`] },
  { spanish: [`no hay problema`], english: [`no problem`] },
  { spanish: [`usted usa el portátil`], english: [`are you using the laptop`] },
  { spanish: [`como va`], english: [`how's it going`] },
  { spanish: [`esta fernanda dormida`], english: [`is fernanda asleep`] },
  { spanish: [`lo estoy esperando`], english: [`I look forward to it`] },
  { spanish: [`estoy emocionado por la clase`], english: [`I'm excited about the class`] },
  { spanish: [`dolor`], english: [`pain`] },
  { spanish: [`estas mal`], english: [`are you unwell`] },
  { spanish: [`el no esta occupado`], english: [`he is not busy`] },
  { spanish: [`la camarera`], english: [`the waitress`] },
  { spanish: [`el camarero`], english: [`the waiter`] },
  { spanish: [`como fue tu cita con el doctor ayer`], english: [`how was your appointment with the doctor yesterday`] },
  { spanish: [`pregunta`], english: [`question`] },
  { spanish: [`el tiene que`], english: [`he has to`] },
  { spanish: [`el va a decir algo`], english: [`he is going to say something`] },
  { spanish: [`yo no lo hice`], english: [`I didn't do it`] },
  { spanish: [`hermosísima`], english: [`really beautiful`] },
  { spanish: [`el ruido`], english: [`the noise`] },
  { spanish: [`caminar`], english: [`to walk`] },
  { spanish: [`tienes mascotas`], english: [`you have pets`] },
  { spanish: [`cojo`], english: [`I take`, `lame`] },
  { spanish: [`coger`], english: [`to take`] },
  { spanish: [`la lluvia`], english: [`the rain`] },
  { spanish: [`nosotros vinimos ayer`], english: [`we came yesterday`] },
  { spanish: [`dibujar`], english: [`to draw`] },
  { spanish: [`dibujaste`], english: [`you drew`] },
  { spanish: [`pensar`], english: [`to think`] },
  { spanish: [`me pienso`], english: [`I think`] },
  { spanish: [`suave`], english: [`smooth`] },
  { spanish: [`comida salada`], english: [`salty food`] },
  { spanish: [`un perro rescatado`], english: [`a rescue dog`] },
  { spanish: [`nadar`], english: [`to swim`] },
  { spanish: [`estoy visitándolos`], english: [`I am visiting them`] },
  { spanish: [`hasta pronto`], english: [`see you soon`] },
  { spanish: [`que tengas un buen viaje`], english: [`have a good trip`] },
  { spanish: [`dar me un beso`], english: [`give me a kiss`] },
  { spanish: [`besome`], english: [`kiss me`] },
  { spanish: [`convivir`], english: [`to live together`] },
  { spanish: [`el séquito`], english: [`the entourage`] },
  { spanish: [`encaramarse`], english: [`to climb up onto`] },
  { spanish: [`la sortija`, `el anillo`], english: [`the ring`] },
  { spanish: [`la garota`], english: [`samba girl`] },
  { spanish: [`tamboreros`], english: [`drum players`] },
  { spanish: [`hasta el momento`], english: [`until now`] },
  { spanish: [`ella usaba el portátil`], english: [`she was using the laptop`] },
  { spanish: [`por qué estaba tu camiseta mojada`], english: [`why was your t-shirt wet`] },
  { spanish: [`ella está dando`], english: [`she is giving`] },
  { spanish: [`tú trabajas`], english: [`you work`] },
  { spanish: [`la potestad`], english: [`the authority`] },
  { spanish: [`cotidiano`], english: [`daily`] },
  { spanish: [`el aventón`], english: [`the ride`] },
  { spanish: [`medianoche`], english: [`midnight`] },
  { spanish: [`tomo el almuerzo`], english: [`I take lunch`] },
  { spanish: [`perezoso`], english: [`lazy`,`sloth`] },
  { spanish: [`más tarde, voy a salir`], english: [`I'm leaving later`] },
  { spanish: [`oro`], english: [`gold`] },
  { spanish: [`roto`], english: [`broken`] },
  { spanish: [`mi tía desayunaba`], english: [`my aunt was eating breakfast`] },
  { spanish: [`el motor estaba apagado`], english: [`the engine was off`] },
  { spanish: [`apagar`], english: [`to turn off`] },
  { spanish: [`sesenta`], english: [`sixty`] },
  { spanish: [`setenta`], english: [`seventy`] },
  { spanish: [`cien`], english: [`one hundred`] },
  { spanish: [`doscientos`], english: [`two hundred`] },
  { spanish: [`trescientos`], english: [`three hundred`] },
  { spanish: [`quinientos`], english: [`five hundred`] },
  { spanish: [`mil`], english: [`thousand`] },
  { spanish: [`cien mil`], english: [`hundred thousand`] },
  { spanish: [`no leo mucho`], english: [`I don't read much`] },
  { spanish: [`son las tres en punto`], english: [`it's three o'clock`] },
  { spanish: [`son viente para los dos`], english: [`it's twenty to two`] },
  { spanish: [`de la madrugada`], english: [`in the early morning`] },
  { spanish: [`de la mañana`], english: [`in the morning`] },
  { spanish: [`segundos`], english: [`seconds`] },
  { spanish: [`mediodía`], english: [`midday`,`noon`] }, 
  { spanish: [`nadie`], english: [`nobody`] },
  { spanish: [`ustedes`], english: [`you`, `they`] },
  { spanish: [`despertar con pereza`], english: [`to wake up with laziness`] },
  { spanish: [`si`], english: [`if`] },
  { spanish: [`yo`], english: [`I`] },
  { spanish: [`tu`, `usted`], english: [`you`] },
  { spanish: [`el`], english: [`he`] },
  { spanish: [`ella`], english: [`she`] },
  { spanish: [`nosotros`, `nosotras`], english: [`we`] },
  { spanish: [`ellos`, `ellas`], english: [`they`] },
  { spanish: [`comer`], english: [`to eat`] },
  { spanish: [`yo como`], english: [`I eat`] },
  { spanish: [`tu comes`], english: [`you eat`] },
  { spanish: [`el come`], english: [`he eats`] },
  { spanish: [`ella come`], english: [`she eats`] },
  { spanish: [`ellos comen`], english: [`they eat`] },
  { spanish: [`nosotros comemos`], english: [`we eat`] },
  { spanish: [`oran`], english: [`to pray`] },
  { spanish: [`amar`], english: [`to love`] },
  { spanish: [`vivir`], english: [`to live`] },
  { spanish: [`llegar`], english: [`to arrive`] },
  { spanish: [`tarde`], english: [`late`] },
  { spanish: [`siempre`], english: [`always`] },
  { spanish: [`contigo`], english: [`together`] },
  { spanish: [`leer`], english: [`to read`] },
  { spanish: [`voz alta`], english: [`loud voice`] },
  { spanish: [`ver`], english: [`to see`] },
  { spanish: [`desde lejos`], english: [`from far`] },
  { spanish: [`cielo estrellado`], english: [`starry sky`] },
  { spanish: [`alguien`], english: [`someone`, `somebody`, `anyone`] },
  { spanish: [`soy`], english: [`I am`] },
  { spanish: [`eres`], english: [`you are`] },
  { spanish: [`somos`], english: [`we are`] },
  { spanish: [`son`], english: [`they are`] },
  { spanish: [`de que parte de argentina eres`], english: [`which part of argentina are you from`] },
  { spanish: [`cerca de londres`], english: [`close to london`] },
  { spanish: [`nos vemos`], english: [`we see each other`] },
  { spanish: [`nosotros vemos un gato`], english: [`we see the cat`] },
  { spanish: [`campo`], english: [`countryside`] },
  { spanish: [`fue robado`], english: [`it was stolen`] },
  { spanish: [`medio ambiente`], english: [`the environment`] },
  { spanish: [`al comienzo`], english: [`at the start`] },
  { spanish: [`da miedo`], english: [`it's scary`] },
  { spanish: [`barrio`], english: [`neighbourhood`] },
  { spanish: [`afuera de londres`], english: [`outside of london`] },
  { spanish: [`muy lento`], english: [`very slow`] },
  { spanish: [`no muy seguido`], english: [`not very often`] },
  { spanish: [`descansar`], english: [`to rest`] },
  { spanish: [`cantar`], english: [`to sing`] },
  { spanish: [`peluqueria`], english: [`hair salon`] },
  { spanish: [`abrazar`], english: [`to hug`] },
  { spanish: [`tener que`], english: [`have to`] },
  { spanish: [`yo tengo que`], english: [`I have to`] },
  { spanish: [`hago mis tareas después de clase`], english: [`I do my homework after class`] },
  { spanish: [`qué voy a hacer con el resto de mi vida`], english: [`what am I going to do with the rest of my life`] },  
];

export default words;

