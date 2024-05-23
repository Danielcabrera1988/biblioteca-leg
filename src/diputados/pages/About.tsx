export const About = () => {
  const imgRecinto = `/assets/recinto.png`;
  return (
    <div className="flex flex-col gap-3 my-6 mx-auto w-[80%] place-items-start text-sm text-justify md:text-lg animate__animated animate__fadeIn sm:text-base lg:text-xl lg:max-w-[60%]">
      <div className="flex flex-col place-items-center">
        <h1 className="py-6 text-xl font-bold font-Avenir-Medium">
          Cámara de Diputados de la Provincia del Chaco
        </h1>
        <img
          className="rounded-md"
          src={imgRecinto}
          alt="recinto-poder-legislativo"
        />
      </div>
      <section className="flex flex-col gap-3">
        <h3 className="my-2 font-bold font-Avenir-Medium">
          ¿Qué es la Camara de Diputados?
        </h3>
        <p className="pl-2 mb-2 font-Calibri">
          Es el Poder Legislativo llamado también Parlamento, está constituido
          por un cuerpo colegiado y nuestra Constitución determina que sea
          ejercido por una Cámara de Diputados. En nuestra provincia funciona
          con un sistema unicameral, a diferencia del Congreso de la Nación que
          es bicameral, es decir con Cámara de Diputados y Cámara de Senadores.
        </p>
        <h3 className="mb-2 font-bold font-Avenir-Medium">
          ¿Quiénes la Componen?
        </h3>
        <p className="pl-2 m-2 font-Calibri">
          La Cámara de Diputados del Chaco está compuesta en la actualidad por
          treinta y dos miembros (Diputados). Esta cifra puede elevarse como
          máximo hasta cincuenta por ley sancionada por los dos tercios de votos
          del total de sus componentes, con arreglo a cada censo nacional o
          provincial, debidamente aprobado, se determinará el número de
          habitantes correspondientes a la representación por diputado.
        </p>
        <h3 className="mb-2 font-bold font-Avenir-Medium">
          ¿Cuales son sus funciones?
        </h3>
        <h3 className="pl-2 italic font-Calibri">
          La principal función es legislar pero no es la única, también le
          corresponden numerosas atribuciones, las más importantes son:
        </h3>
        <ul>
          <li className="font-Calibri">
            * Fijar anualmente el presupuesto de gastos de la provincia.
          </li>
          <li className="font-Calibri">
            * Autorizar al Poder Ejecutivo a contraer empréstitos. Poder
            Constituyente, es decir la facultad de reforma constitucional.
          </li>
          <li className="font-Calibri">* Acordar subsidios a municipios.</li>
          <li className="font-Calibri">
            * Aprobar o desechar tratado celebrados con la nación, provincias o
            estados internacionales.
          </li>
          <li className="font-Calibri">
            * Debatir: Esto tiene en la legislatura un rol primordial para la
            toma de decisiones, cada legislador expresa libremente sus ideas y
            propuestas sometiéndolas a discusión con sus pares para
            optimizarlas.
          </li>
          <li className="font-Calibri">
            * Fijar divisiones departamentales y los ejidos municipales,
            establecer el régimen de los municipios.
          </li>
          <li className="font-Calibri">
            * Dictar leyes de organización de la justicia y los códigos de
            procedimientos administrativo y judicial.
          </li>
          <li className="font-Calibri">
            * Dictar la ley electoral y la de los partidos políticos.
          </li>
          <li className="font-Calibri">
            * Prestar o denegar acuerdos para nombrar funcionarios.
          </li>
          <li className="font-Calibri">
            * Controlar a los otros poderes mediante Pedidos de Informe,
            Interpelaciones, Investigaciones, etc.
          </li>
        </ul>
        <h3 className="mt-2 mb-2 font-bold font-Avenir-Medium">
          ¿Quienes son los Legisladores?
        </h3>
        <p className="mb-2 ml-2 italic font-Calibri">
          Los legisladores son los Diputados, son los representantes del
          pueblo,es decir los ciudadanos elegidos por el pueblo para integrar el
          Poder Legislativo. Duran cuatro años en su cargo y pueden ser
          reelegidos. Los requisitos para ser elegido diputado son:
        </p>
        <ul>
          <li className="font-Calibri">
            * Ciudadanía natural en ejercicio o legal después de cuatro años de
            obtenida.
          </li>
          <li className="font-Calibri">
            * Tener 25 años como mínimo, a la fecha que deba incorporarse al
            Cuerpo.
          </li>
          <li className="font-Calibri">
            * Ser nativo de la provincia o tener 3 años de residencia inmediata
            en ella.
          </li>
          <li className="font-Calibri">
            * No podrán se diputados los eclesiásticos regulares ni los
            militares en servicio activo.
          </li>
        </ul>
        <h3 className="m-2 mb-2 font-bold font-Avenir-Medium">
          Derechos y Obligaciones de los Legisladores
        </h3>
        <p className="mb-2 ml-2 font-Calibri">
          Tienen derecho a percibir una Dieta (remuneración) por sus funciones,
          también gozan del libre acceso a la información de los actos y
          procedimientos administrativos. Son inviolables por razón de las
          opiniones vertidas y de los votos emitidos en el desempeño de sus
          cargos. Gozan de completa inmunidad en su persona y no podrán ser
          detenidos salvo la circunstancia de ser sorprendidos en flagrante
          delito. Tienen la obligación de asistir a todas la reuniones de las
          Comisiones permanentes a que pertenezcan desde el día en que fueron
          incorporados y a comunicar por escrito en caso de no poder hacerlo y a
          todas la Sesiones que convoque la Cámara. No pueden constituir Cámara
          fuera de la sala de sesiones salvo caso de fuerza mayor.
        </p>
      </section>
    </div>
  );
};
