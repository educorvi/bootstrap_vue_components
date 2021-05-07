# bootstrap_components

## Verwendung
Das package als script im HTML importieren, anschließend können die custom tags verwendet werden.
URL des gesamten Bundles: `https://unpkg.com/@educorvi/bootstrap_components/dist/bundle/dist.umd.min.js`

Alternativ einfach `bundle` in der URL durch einen der folgenden Möglichkeiten ersetzen, um nur den entsprechenden Komponenten zu importieren:
- bundle
- accordion


Beispiel:
```html
<!DOCTYPE html>
<html lang="de">
<body>
<hello-world msg="Hello"></hello-world>
<div style="width: 400px; margin: 20px">
    <vue-accordion data='[{"title": "Abschnitt 1", "content": "some html"},{"title": "Teil 2", "content": "some <b>more</b> html"}]'></vue-accordion>
</div>

<script src="https://unpkg.com/@educorvi/bootstrap_components/dist/bundle/dist.umd.min.js"></script>
</body>
</html>
```


Detailiertere Beschreibung der Komponenten folgt noch...
