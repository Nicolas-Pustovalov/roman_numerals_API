# roman_numerals_API

# French

C'est un petit défi pour la société IEM :)

Cette  API Rest convertit les chiffres arabes en chiffres romains.

Pour tester l'API avec la méthode POST vous pouvez utiliser un outil comme "REST Client" ou "Insomnia" mais le plus simple est d'utiliser la méthode GET via l'URL.
Pour installer les modules, utilisez : npm i.
Pour démarrer le serveur, utilisez : npm start.
Vous pouvez indiquer dans le .env le port que vous souhaitez, PORT=7000 par exemple.
Vous pouvez aussi ne pas indiquer de port, dans ce cas le port 5000 sera utilisé.

Si vous utilisez la méthode GET :
Mettez une URL dans le navigateur Comme par exemple : http://localhost:5000/custom-arabic/38
Le nombre à la fin est le nombre que vous voulez convertir en chiffres romains. 

Si vous utilisez la méthode POST :
Sur la route (http://localhost:5000/custom-arabic) et Content-Type : application/json

Mettez un objet comme par exemple:
 {
    "Nombre" : 2047
}

# English

It's a small challenge for the company IEM :)

This Rest API converts Arabic numerals to Roman numerals

To test API with POST method you can use a tool like "REST Client" or "Insomnia" but the easiest is to use GET method via URL.
To install the modules use: npm i.
To start the server use: npm start.
You can indicate in the .env the port you want, PORT=7000 for example.
You can also not specify a port, in this case the port 5000 will be used.

If you use the GET method:

Put a URL from the browser Like for example: http://localhost:5000/custom-arabic/38
The number at the end is the number you want to convert to Roman numerals 

If you use the POST method:
On the route (http://localhost:5000/custom-arabic) and Content-Type: application/json

Put an object like for example:
 {
    "Number" : 2047
}


