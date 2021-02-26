# Code Challenge: Find Intersection

Tenemos la función FindIntersection(strArr) que lee un array con dos elementos: cada uno representa una lista de número ordenados y separados por comas. El desafío es devolver una lista de números separados por coma con los números que figuren en ambos elementos, en caso de no haber coincidencia se devolverá un string con la palabra false.

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: strArr
- **tipo**: Array
- **limitaciones**: Debe contener dos elementos del tipo string.

## Salida

- **tipo**: String

## Ejemplo
**["1,2,3", "2,3,4"]** debe retornar **"2,3"** 

## Tests

### Test 1  

- **Parametros**: strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]  
- **Resultado esperado**: "1,4,13"
---
### Test 2  

- **Parametros**: strArr = "1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]  
- **Resultado esperado**: "1,9,10"
---
### Test 3  

- **Parametros**: strArr = ["1, 3, 5, 7, 9", "2, 4, 6, 8"]  
- **Resultado esperado**: "false"
---
