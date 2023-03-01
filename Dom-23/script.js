/* Dom (Document Object Model) */

/* Es toda la estructura HTML del documento.
No es JavaScript, es una API (Aplication Programing Interface) */

/* NODOS */

/* Cada parte del arbol del documento es un NODO

Hay varios tipos de NODOS, los mas utilizados son:
  Element node-1 (cualquier etiqueta HTML)
  Text node-3 (El contenido de la etiqueta)
  Comment node-8 (Cualquier comentario en HTML) */

  /* En el inspeccionar del navegador
  Podemos cojer una etiqueta y en la consola podemos usar estos comandos:
  $0 - podemos desplegar todo el contenido de la etiqueta
  $0.nodeType - para ver el tipo del nodo
  $0.textContent - para ver el contenido de la etiqueta
  $0.id - para ver el id del nodo
  $0.nodeName - para ver el nombre del nodo
  $0.childNodes[0].nodeType - para ver el tipo de nodo que contiene la etiqueta */