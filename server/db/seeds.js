use europe 
db.dropDatabase();

db.countries.insertMany([
{"country" : "Albania", "dish" : "Tavë kosi", "greeting" : "Tungjatjeta", "animal" : "Eagle"},
{"country" : "Andorra", "dish" : "Escudella", "greeting" : "Hola", "animal" : "Cow" },
{"country" : "Austria", "dish" : "Wiener schnitzel, Tafelspitz", "greeting" : "Hallo", "animal" : "Golden Eagle"},
{"country" : "Belarus", "dish" : "Draniki", "greeting": "Dobry dzień", "animal" : "European bison"},
{"country" : "Belgium", "dish" : "Moules-frites", "greeting": "Hallo", "animal" : "Belgian Lion"},
{"country" : "Bosnia and Herzegovina", "dish" : "Bosnian pot", "greeting": "Zdravo", "animal" : "Tornjak"},
{"country" : "Bulgaria", "dish" : "Banitsa, Bob chorba", "greeting": "Zdravei", "animal" : "Lion"},
{"country" : "Croatia", "dish" : "Istrian stew", "greeting" : "Zdravo", "animal" : "Pine marten"},
{"country" : "Cyprus", "dish" : "Fasolada", "greeting" : "Yiasoo, Merhaba", "animal" : "Cypriot mouflon"},
{"country" : "Czechia", "dish" : "Roast pork with dumplings and sauerkraut", "greeting": "Ahoj", "animal" : "Two-tailed lion"},
{"country" : "Denmark", "dish" : "Fried pork and potato-based dish", "greeting": "Hej", "animal" : "Mute swan"},
{"country" : "Estonia", "dish" : "Verivorst", "greeting": "Tere", "animal" : "Barn swallow"},
{"country" : "Finland", "dish" : "Karjalanpaisti, Mämmi, Sautéed reindeer", "greeting": "Moi", "animal" : "Whooper swan"},
{"country" : "France", "dish" : "Crêpe, Pot-au-feu,  Macaron, Bisque", "greeting": "Bonjour", "animal" : "Gallic rooster"},
{"country" : "Georgia", "dish" : "Khachapuri, khinkali", "greeting" : "Gamarjoba", "animal" : "Wolf"},
{"country" : "Germany", "dish" : "Currywurst, Sauerbraten, Bratwurst", "greeting": "Hallo", "animal" : "Black eagle"},
{"country" : "Greece", "dish" : "Fasolada,  Moussaka, Souvlaki", "greeting" : "Geia Sas", "animal" : "Dolphin"},
{"country" : "Vatican City", "dish" : "Fettuccine Alla Papalina", "greeting" : "Salve", "animal" : "Long-tailed field mouse"},
{"country" : "Hungary", "dish" : "Gulyás", "greeting" : "Szia", "animal" : "Turul"},
{"country" : "Iceland", "dish" : "Hákarl, Þorramatur" , "greeting" : "Hallo", "animal" : "Gyrfalcon"},
{"country" : "Ireland", "dish" : "Colcannon, Irish stew" , "greeting" : "Hi", "animal" : "Irish Elk"},
{"country" : "Italy", "dish" : "Ragu alla Bolognese", "greeting" : "Ciao", "animal" : "Italian wolf"},
{"country" : "Kosovo", "dish" : "Flia", "greeting" : "Agim", "animal" : "Lynx"},
{"country" : "Latvia", "dish" : "Latke", "greeting" : "Sveiki", "animal" : "White wagtail"},
{"country" : "Liechtenstein", "dish" : "Käsknöpfle", "greeting" : "Grüss Gott", "animal" : "Kestral"},
{"country" : "Lithuania", "dish" : "Cepelinai", "greeting" : "Labas", "animal" : "White stork"},
{"country" : "Luxembourg", "dish" : "Judd mat Gaardebounen, Bouneschlupp", "greeting" : "Moien", "animal" : "Red lion"},
{"country" : "North Macedonia", "dish" : "Tavče Gravče", "greeting" : "Zdravo", "animal" : "Lion"},
{"country" : "Malta", "dish" : "Pastizzi, Rabbit Stew (Fenkata)", "greeting" : "Bongu", "animal" : "Pharaoh Hound"},
{"country" : "Monaco", "dish" : "Barbagiuan" , "greeting" : "Bonjour", "animal" : "Hedgehog"},
{"country" : "Montenegro", "dish" : "Kačamak, Raštan", "greeting" : "Zdravo", "animal" : "Eagle"},
{"country" : "Moldova", "dish" : "Mămăligă, Sarmale, Mici", "greeting" : "Noroc", "animal" : "Auroch"},
{"country" : "Netherlands", "dish" : "Stamppot, Hutspot", "greeting" : "Hallo", "animal" : "Black-tailed godwit"},
{"country" : "Norway", "dish" : "Fårikål", "greeting" : "Hei", "animal" : "Fjord horse"},
{"country" : "Poland", "dish" : "Bigos, Pierogi, Kotlet schabowy, Żurek", "greeting" : "Witaj", "animal" : "White-tailed eagle"},
{"country" : "Portugal", "dish" : "Bacalhau" , "greeting" : "Ola", "animal" : "Rooster"},
{"country" : "Romania", "dish" : "Mămăligă, Sarmale, Mici", "greeting" : "Buna ziua", "animal" : "Lynx"},
{"country" : "Russia", "dish" : "Pelmeni, Shchi, Kasha, Pirogi, Pirozhki", "greeting" : "Privet", "animal" : "Brown Bear"},
{"country" : "San Marino", "dish" : "Torta Tre Monti", "greeting" : "Ciao", "animal" : "Horse"},
{"country" : "Serbia", "dish" : "Ćevapčići, Pljeskavica, Ražnjići, Proja, Kajmak", "greeting" : "Zdravo", "animal" : "Wolf"},
{"country" : "Slovakia", "dish" : "Bryndzové halušky", "greeting" : "Ahoj", "animal" : "Brown Bear"},
{"country" : "Slovenia", "dish" : "Ajdovi žganci, Belokranjska povitica, Obara", "greeting" : "Zivjo", "animal" : "White lipizzaner stallion"},
{"country" : "Spain", "dish" : "Tortilla española", "greeting" : "Hola", "animal" : "Bull"},
{"country" : "Sweden", "dish" : "Köttbullar, Kräftskiva, Surströmming, Ostkaka", "greeting" : "Halla", "animal" : "Eurasian Elk"},
{"country" : "Switzerland", "dish" : "Cervelat, Fondue", 'greeting': 'Ciao', "animal" : "Cow"},
{"country" : "Ukraine", "dish" : "Borscht, Varenyky", "greeting" : "Vitayu", "animal" : "Common nightingale"},
{"country" : "United Kingdom", "dish" : "Fish and chips, Haggis", "greeting" : "Hello, Areet", "animal" : "Lion, Unicorn, Red Dragon"},
])