## 🤔 Dudas?

```sequence
Usuario->API: Usuario relaliza petición 🤦‍♂️🤦‍♂️
Note right of API: Api revisa si tiene cache
API-->Usuario: Buenas noticias respondemos 🐱‍🏍
```

##### ¿Que metodo de peticion se recomienda cachear?
>GET

##### ¿Puedo cambiar el tiempo de cache a mi gusto?
> SI puedes establecer minutos o milisegundos

##### ¿Puedo controlar el tiempo de cache dependiendo de statusCode 200, 404, 500?
> Si

#### ¿Puedo conectar con Redis?
> Si
```js
     engine: require('expeditious-engine-redis')(
        {
            host: '127.0.0.2',
            port: 6379
        }  
     )
```

##### ¿Cuando se debe usar?
> Lo recomiendo para consultas repetitivas y comportamiento predecible
