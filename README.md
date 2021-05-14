# bootstrap_components

## Verwendung
Das package als script im HTML importieren, anschließend können die custom tags verwendet werden.
URL des gesamten Bundles: `https://unpkg.com/@educorvi/bootstrap_components/dist/bundle/dist.umd.min.js.

Alternativ finden sich die Skripte auch als Anhang an den Releases.

Zusätzlich muss das CSS von Bootstrap vorhanden sein.

`bundle` in der URL lässt sich durch eine der folgenden Möglichkeiten ersetzen, um nur den entsprechenden Komponenten zu importieren:
- bundle
- accordion

An jede der Bezeichnungen kann noch -nv angehängt werden, zum Besipiel bundle-nv. Das ist dann eine Version, die Vue nicht enthält, die Dateigröße ist dann kleiner, allerdings muss das Vue-Script dann manuell hinzugefügt werden.


Beispiel:
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <title>Titel</title>
</head>
<body>
<div style="width: 400px; margin: 20px">
    <vue-accordion data='[{"title": "Abschnitt 1", "content": "some html"},{"title": "Teil 2", "content": "some <b>more</b> html"}]'></vue-accordion>
</div>

<script src="https://unpkg.com/@educorvi/bootstrap_components/dist/accordion/dist.umd.min.js"></script>
</body>
</html>
```

## Komponenten
- Accordion: Rendert ein Accordion. Im Attribut `data` kann ein Array mit Akkordionelementen übergeben werden. 
    Jedes dieser Elemente sollte die beiden Eigenschaften `title` (Titel des Akkordionreiters) und `content`(als html codierter Inhalt des Akkordionreiters) enthalten
