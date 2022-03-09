<h1 align="middle"> Checkers </h1>

## Summary

* [Overview](#Overview)
* [Rules](#Rules)
* [Requirements](#requirements)
* [Credits](#Credits)

## Overview
Let's create a Checkers game with only HTML, CSS and Javascript.
You can find a working example [here](http://thierry.franquin.free.fr/jeudame/Dames.htm)

## Rules

* You **MUST** create a directory named `checkers`
* You **MUST** create a file called `.author`:
* You **MUST** return your projet through WeTransfer and add your link [here](https://docs.google.com/spreadsheets/d/1V0PYRZaepY-LeFda4PVIfrZ0C_9Yp9TKPQ9IvJ3srdE/edit?usp=sharing)

```sh
~/efrei-courses/learn-javascript/exams/checkers ❯❯❯ cat -e .author
[
  {
    "firstName": "Dylan",
    "lastName": "DE SOUSA"
  },
  {
    "firstName": "John",
    "lastName": "DOE",
  }
]
```

## Requirements

### Board
  - 8x8 cells.
  - 24 pieces ( 12 of 2 colors )

![checers board ](https://www.ducksters.com/games/checkers.png)

### Pieces
  - Black pieces move first
  - Always move diagonally. Pieces are limited to move forward while Kings can move on every diagonal
  - When it reach the opposite line it become a King

### Logic
  - Turn by Turn with no AI
  - Player win when there no more enemy's pieces left

## Credits

Made by **Call-Me-Dev**
