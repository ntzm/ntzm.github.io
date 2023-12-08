---
layout: base.njk
---

# geo: Intents Testing

[Source](https://developer.android.com/guide/components/intents-common#Maps)

## Coordinates

> Show the map at the given longitude and latitude.

[geo:53.38067,-1.47024](geo:53.38067,-1.47024)

## Coordinates with zoom

> Show the map at the given longitude and latitude at a certain zoom level.
> A zoom level of 1 shows the whole Earth, centered at the given lat,lng.
> The highest (closest) zoom level is 23.

[geo:53.38067,-1.47024?z=11](geo:53.38067,-1.47024?z=11)

[geo:53.38067,-1.47024?z=3](geo:53.38067,-1.47024?z=3)

## Labelled coordinates

> Show the map at the given longitude and latitude with a string label.

[geo:0,0?q=53.38067,-1.47024(Test)](geo:0,0?q=53.38067,-1.47024(Test))

## Street address

> Show the location for "my street address", which can be a specific address or location query. 

Used by Android Contacts app.

[geo:0,0?q=Sheffield+City+Centre](geo:0,0?q=Sheffield+City+Centre)

[geo:0,0?q=Sheffield%20City%20Centre](geo:0,0?q=Sheffield%20City%20Centre)
