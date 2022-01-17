# spaceStagram

## Introduction

Hello! Here is documentation for my project 'spaceStagram' in the field of frontend. You can visit the web site in the browser by the address(voicihojun.github.io/spacestagram).

## Description

1. Search results come from NASA’s free APIs(https://api.nasa.gov). Between several nasa's websites, I used APOD( Astronomy Picture of the Day).

HTTP Request :
GET https://api.nasa.gov/planetary/apod with API key.

Query parameters : Query parameters that I used for this website
| Parameter | Type | Default | Description |
| --- | :---: | :---: | ---: |
| `start_date` | YYYY-MM-DD | none | The start of a date range, when requesting date for a range of dates. Cannot be used with date. |
| `end_date` | YYYY-MM-DD | today | The end of the date range, when used with start_date. |
| `count` | int | none | If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date. |
| `api_key` | string | DEMO_KEY | api.nasa.gov key for expanded usage |

2. Framework : React, CSS

3. Technical requirements
   1. Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image.
   2. Each image can be “liked”, and a user should be able to undo their “like”
   3. The HTML that ends up being served client-side should be accessible and semantic (MDN reference)
   4. More options
      - Save likes if the user leaves or reloads the page
      - Animate the “like” action (might we suggest a heart?)
      - Add a loading state while we wait for NASA’s API to return data
      - Create shareable links for each image
      - Add a date-picker to be able to browse photos starting from a specific date
      - Add a fabicon image to the title for spaceStagram
      - Responsive website
      - random button to show randomly 5 space's images

## Demo

Below are gif demos of my project to show the above technical requirements.

##### Initial State

When I first access to this website, it shows 5 random space's images. Here is what I used query parameter `count=5`. Each image result lists a title, date of capture and a button to “like” that image. Each image can be “liked”, and a user is able to undo their “like”
gif1

##### Save likes if the user leaves or reloads the page

By using localstorage of browser, I saved likes when the user leaves or reloads the page
gif2

##### Animate the “like” action

By using CSS, I made a like action which The heart shape increases and returns to its original size.
gif2

##### Add a loading state while we wait for NASA’s API to return data

gif3

##### Create shareable links for each image

Each image has a link image. We can copy the shareable link by clicking the link image.
gif4

##### Add a date-picker to be able to browse photos starting from a specific date

With start date and end date information, we can search the photos from the start date to the end date.
gif5

##### Add a fabicon image to the title for spaceStagram & Responsive website & random button

gif6
