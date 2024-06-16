// Primeira forma de importar, onde não conseguimos mudar o nome da função elas deves ser iguais ao documento original
import { inline } from "./inline.js"

// segunda forma de importar utilizando default, com este importe podemos mudar o nome da função
import defaultInline from "./inline.js"
import exportDefault, { group, a, b, c, d } from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()