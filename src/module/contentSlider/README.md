# Content Slider

## Packete nach installieren

### hammerjs installieren

Hammer.js wird verwendet, um Touch-Gesten (z.B. Wischen) im Slider zu unterstützen.

```
npm i hammerjs
npm install --save-dev @types/hammerjs
```

## Module Ordner anlegen

Am besten wird ein Module Ordner angelegt im src Ordner, wo dann alle Module abgespeichert werden können.

`src/module`-Verzeichnis

## Import der Componenten

In der Datei wo der Slider angezeigt werden soll wird der import hinzugefügt.

```JavaScript
import {SliderContainerComponent, SliderComponent, ItemComponent} from "./module/contentSlider"
```

## SliderContainer

Der SliderContainerComponent ist die Hauptkomponente und wird dort platziert wo der Slider angezeigt werden soll. Vorzugsweise im Header-Bereich.

```JavaScript
import {SliderContainerComponent, SliderComponent, ItemComponent} from "./module/contentSlider"

<template>
    <header>
        <SliderContainerComponent>
        </SliderContainerComponent>
    </header>
</template>
```

## Slider

Im SliderComponent ist der Slider hinterlegt diese Komponente wird innerhalb von SliderContainerComponent platziert.

```JavaScript
import {SliderContainerComponent, SliderComponent, ItemComponent} from "./module/contentSlider"

<template>
    <header>
        <SliderContainerComponent>
            <SliderComponent>
            </SliderComponent>
        </SliderContainerComponent>
    </header>
</template>
```

## Item

Die ItemComponent`s sind die Inhalte des Sliders für jedem Item gibt es ein Index in dem Slider und kann per Button ausgewählt oder durch swippen verschoben werden. Zwischen der Componente kann der Komplette Content hinzugefügt werden.

```JavaScript
import {SliderContainerComponent, SliderComponent, ItemComponent} from "./module/contentSlider"

<template>
    <header>
        <SliderContainerComponent>
            <SliderComponent>
                <ItemComponent>
                    <h1>Überschrift</h1>
                    <button>Klick mich</button>
                </ItemComponent>
                <ItemComponent></ItemComponent>
                <ItemComponent></ItemComponent>
                <ItemComponent></ItemComponent>
            </SliderComponent>
        </SliderContainerComponent>
    </header>
</template>
```

## Item Props

Das ItemComponent Element kann Props annehmen.

### bg-Props

bg-Props sind für die Hintergrund Bilder. Möchtest du ein Hintergrund hinzufügen über gib einfach die URL als Prop.

```JavaScript
import {SliderContainerComponent, SliderComponent, ItemComponent} from "./module/contentSlider"

<template>
    <header>
        <SliderContainerComponent>
            <SliderComponent>
                <ItemComponent bg="subhome-ai.jpg"></ItemComponent>
            </SliderComponent>
        </SliderContainerComponent>
    </header>
</template>
```

### classes-Props

In den classes-Props können custom Style Classen übergeben werden.

```JavaScript
import {SliderContainerComponent, SliderComponent, ItemComponent} from "./module/contentSlider"

<template>
    <header>
        <SliderContainerComponent>
            <SliderComponent>
                <ItemComponent classes="beispiel"></ItemComponent>
            </SliderComponent>
        </SliderContainerComponent>
    </header>
</template>
```

## Lizenz

MIT-Lizenz

Copyright (c) 2024 Danny Nothdurft

Hiermit wird unentgeltlich jeder Person, die eine Kopie dieser Software und der zugehörigen Dokumentationsdateien (die "Software") erhält, die Erlaubnis erteilt, uneingeschränkt mit der Software zu handeln, einschließlich, aber nicht beschränkt auf die Rechte zur Nutzung, Vervielfältigung, Änderung, Zusammenführung, Veröffentlichung, Verteilung, Unterlizenzierung und/oder zum Verkauf von Kopien der Software, und Personen, denen die Software zur Verfügung gestellt wird, dies zu erlauben, unter den folgenden Bedingungen:

Der obige Urheberrechtshinweis und dieser Erlaubnishinweis müssen in allen Kopien oder wesentlichen Teilen der Software enthalten sein.

DIE SOFTWARE WIRD OHNE JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIE BEREITGESTELLT, EINSCHLIESSLICH DER GARANTIEN DER MARKTREIFE, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND DER NICHTVERLETZUNG. IN KEINEM FALL SIND DIE AUTOREN ODER DIE URHEBER FÜR ANSPRÜCHE, SCHÄDEN ODER ANDERE HAFTUNGSANSPRÜCHE VERANTWORTLICH, OB AUS EINEM VERTRAGSVERHÄLTNIS, EINER UNERLAUBTEN HANDLUNG ODER ANDERWEITIG, DIE SICH AUS, AUS ODER IM ZUSAMMENHANG MIT DER SOFTWARE ODER DER NUTZUNG ODER ANDEREN GESCHÄFTEN MIT DER SOFTWARE ERGEBEN.
