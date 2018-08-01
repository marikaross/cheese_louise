export const mockCheeseData = {
"nhits":338,
"parameters":{
"dataset":[
"frenchcheese"
],
"timezone":"UTC",
"rows":10,
"format":"json",
"facet":[
"id",
"cheese",
"milk"
]
},
"records":[
{
"datasetid":"frenchcheese",
"recordid":"55188f0706ca252277065bf8eb1393eec55cc090",
"fields":{
"cheese":"Goat Milkton",
"french_page":"http://fr.wikipedia.org/wiki/Ch%C3%A8vreton",
"geo_point_2d":[ 1
],
"milk":"Goat Milk",
"geo_shape":{
"type":"Polygon",
"coordinates":[
[1, 5, 6]
]
},
"id":"Ardèche"
},
"geometry":{
"type":"Point",
"coordinates":[
4.425630966744431,
44.752618523961765
]
},
"record_timestamp":"2016-09-20T22:29:57+00:00"
},
{
"datasetid":"frenchcheese",
"recordid":"39ac888bb730850ef3759c3430e73adeae249cef",
"fields":{
"cheese":"Gruyère français",
"french_page":"http://fr.wikipedia.org/wiki/Gruy%C3%A8re_fran%C3%A7ais",
"image":{
"mimetype":"application/octet-stream",
"format":"JPG",
"filename":"280px-Meules_gruyere.JPG.jpe",
"last_synchronized":"2017-03-20T06:08:03.156729",
"width":300,
"etag":"962e737d144260b1ce6e496166b7358c",
"id":"f9f6d1919222e77d20c30b5b163b3cae",
"height":300,
"thumbnail":false
},
"geo_point_2d":[
45.26399478730571,
5.574173172916646
],
"id":"Isère",
"geo_shape":{
"type":"Polygon",
"coordinates":[
[1, 2, 2]
]
},
"milk":"Cow Milk"
},
"geometry":{
"type":"Point",
"coordinates":[
5.574173172916646,
45.26399478730571
]
},
"record_timestamp":"2016-09-20T22:29:57+00:00"
}]
}

export const mockSummaryData = [
  "bee",
  [
    "Bee"
  ],
  [
    "Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the European honey bee, for producing honey and beeswax."
  ],
  [
    "https://en.wikipedia.org/wiki/Bee"
  ]
]

export const singleCheeseData = {
"nhits":338,
"parameters":
{
  "dataset":[
    "frenchcheese"
  ],
  "timezone":"UTC",
  "rows":10,
  "format":"json",
  "facet":[
    "id",
    "cheese",
    "milk"
    ]
  },
"records":[
  {
  "datasetid":"frenchcheese",
  "recordid":"55188f0706ca252277065bf8eb1393eec55cc090",
  "fields":
  {
    "cheese":"Goat Milkton",
    "french_page":"http://fr.wikipedia.org/wiki/Ch%C3%A8vreton",
    "geo_point_2d":[ 1
    ],
  "milk":"Goat Milk",
  "geo_shape":{
    "type":"Polygon",
    "coordinates":[
    [1, 5, 6]
    ]
    },
  "id":"Ardèche"
  },
  "geometry":{
    "type":"Point",
    "coordinates":[
      4.425630966744431,
      44.752618523961765
      ]
    },
  "record_timestamp":"2016-09-20T22:29:57+00:00"
  }
  ]
}
