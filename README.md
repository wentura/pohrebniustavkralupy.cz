# Pohrebni ustav Kralupy

## Pohrebni ustav Cibulka

Pro Petra a Natalii Stipkovou, static site, kterou jeden (Popelka = Omega Computers) totatlne zmrvil WP a ja to vyzehlim

```
next->
```

### poznamky Adam Drake

- ⁠Why not a reusable herobanner component? You seem to be repeating code. I see there is a Hero.jsx but its commented out? I noticed the height of the image in the hero banner differs sometimes between pages (at least on desktop)
- ⁠In your app folder you have page.js and layout.js, these arent jsx files? How come?
- ⁠The menu items on. the sluzby menu seem out of order to the content on the page.
- ⁠On the footer - the ⁠ Informace pro pozustale ⁠ and ⁠ Kontakt ⁠ seem like they are just hanging there. I would give them titles like the other three columns or include them in the existing columns
- ⁠I would make the top nav taller, the nav manu font a little larger. Give it more space.
- ⁠I would organise your ⁠ components ⁠ folder a bit - everything is in one folder where there seems to be logical grouping - logos, menu, hero, etc just make it a little easier to navigate
- ⁠I would remove all commented out code. It will just confuse you later on if and when you come back to code this.
- ⁠This is just a general comment… there seems too much white space when I navigate around the site. Like spacings seem inconsistent
- ⁠Consider reusable components like <Heading1>, <Heading2> or some general <Heading>where you pass down props to choose h1, h2, h3 etc. This way you code these only once, make the size, padding, margins etc once and then reuse them across the site. It makes your life easier and everything consistent. And if you want to make a change you only do it in one place.

## Assety co jsem dostal

- navrh loga
- canvu
- texty
- font jaky chtej
- barvy
- nesmim zapomenout na copyright pro obrazky na logo svg licence

## jak pokracuje prace

- 16.11. prvni schuzka - 1h
- 19.11. 1.verze loga, asi dobry
- 20.11.
  - 2.verze loga, cekam na schvaleni
  - struktura v nextu a rozsekat si to na komponenty (nic slozityho, vsechno bude stati)
