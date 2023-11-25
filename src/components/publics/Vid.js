import React from "react";
import "../styles/Vid.css";

const Vid = () => {
  const code = "https://www.youtube.com/embed/Rsv2VkoIpk0?si=Gwfx0L2Mbc_bpLnV";

  return (
    <div className="video-player">
      <iframe
        className="opening"
        src={code}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="text-content">
        <h2>
          Hola este es mi proyecto base de una pokedex a partir de la pokeapi de
          uso publico.
        </h2>
        <p>
          La verdad tuve muchas dificultades y muchos cambios de linea y vision
          con respecto a algunas partes de la pokedex, no soy muy bueno en esto
          pero creo que hice lo mejor posible, espero sea de su agrado y valoren
          el esfuerzo, aunque realmente no esta terminada y sigue sujeta a
          cambios/muchos cambios, aqui una lista de algunos de ellos.
        </p>
        <ul>
          <li>
            Tengo que mejorar el diseño responsive e informarme mas sobre este
            asunto.
          </li>
          <li>
            Agregar algun tipo de interaccion para que al ingresar el usuario
            pueda poder elegir 5 pokemones iniciales, aunque nose bien si eso es
            posible hacerlo.
          </li>
          <li>
            Arreglar los problemas de sobre carga de datos, en varios lados hay
            que hacer varias veces click para que funcione correctamente, la
            carga es lenta e interrumpe la implementacion que uno quiere llegar
            a hacer
          </li>
          <li>
            Hacer la busqueda por 2 types de pokemons, aunque en la api no
            explican como hacerlo ni hay una consulta de eso, puede que no se
            pueda hacer, nose bien todavia.
          </li>
          <li>Agregar botones para ir atras (opcional por el momento).</li>
          <li>
            Ver como podria hacer para que queden las datos en la parte del
            enlace (pagina=? evolucion=?, etc).
          </li>
          <li>
            Arreglar la manera de visualizacion de las evoluciones, si son 3 se
            mantiene igual en 5 columnas, si son 2 cambiarlo a 4 columnas, y si
            es solo uno cambiarlo a 3 columnas, tengo que ver bien como hacerlo
            o cambiar la logica a la manera en que las genero.
          </li>
          <li>
            Hacer funcionales los formularios, y que el chequeo no interrumpa todo,
             ver por que tengo que hacer tantos clicks para que haga la validacion de datos.
          </li>
          <li>
            Ver como se puede agregar un captcha a los formularios.
          </li>
        </ul>
        <p>
          Y varias mas que seguramente no me acuerdo, sin muchos mas que pensar
          y que decir, disfruten y si tienen mejoras con gusto escuchare y
          tratare de implementarlas, saludoss <span>(ﾉ◕ヮ◕)ﾉ*❤</span>.
        </p>
      </div>
    </div>
  );
};

export default Vid;
