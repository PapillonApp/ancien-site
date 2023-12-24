# 📝 Page note
## 🧪 Tester la page
[Ouvrir la page avec des données fictive](https://getpapillon.xyz/note?d=eyJoZWFkZXIiOnsidXNlcm5hbWUiOiJSw6lteSIsInN1YmplY3QiOiJIaXN0b2lyZSBHw6lvIiwiY29sb3IiOiIjNjM4Mjc0In0sICJkYXRhIjp7Im5vdGUiOiIxOC8yMCIsImNvbW1lbnRhcnkiOiJVbmUgZnJhbmNoZSByw6l1c3NpdGUiLCAiY29lZiI6ICJ4MS4wMCIsICJub3RlMjAiOiAiMTgvMjAiLCAiY2xhc3MiOiAiMTEsNDgvMjAiLCAibWluIjogIjAyLzIwIiwgIm1heCI6ICIxOS8yMCJ9fQ==)
## 🔧 Comment ça marche
L'URL doit contenir le paramètre "d" (data), qui à comme valeur une chaîne en base64.\
**Exemple :** \
`eyJoZWFkZXIiOnsidXNlcm5hbWUiOiJSw6lteSIsInN1YmplY3QiOiJIaXN0b2lyZSBHw6lvIiwiY29sb3IiOiIjNjM4Mjc0In0sICJkYXRhIjp7Im5vdGUiOiIxOC8yMCIsImNvbW1lbnRhcnkiOiJVbmUgZnJhbmNoZSByw6l1c3NpdGUiLCAiY29lZiI6ICJ4MS4wMCIsICJub3RlMjAiOiAiMTgvMjAiLCAiY2xhc3MiOiAiMTEsNDgvMjAiLCAibWluIjogIjAyLzIwIiwgIm1heCI6ICIxOS8yMCJ9fQ==‌`\
**Contenu traduit :** \
```json
{
	"header":{
		"username":"Rémy",
		"subject":"Histoire Géo",
		"color":"#638274"
	},
	"data":{
		"note":"18/20",
		"commentary":"Une franche réussite",
		"coef": "x1.00",
		"note20": "18/20",
		"class": "11,48/20",
		"min": "02/20",
		"max": "19/20"
	}
}
```

Le javascript en bas de la page note.html, se charge d'afficher les valeurs du paramètre "d" sur la page.

Si le paramètre "d" n'est pas présent, ou que les paramètres sont invalides, elle renverra vers un easter egg.