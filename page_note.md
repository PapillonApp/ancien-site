# 📝 Page note
## 🧪 Tester la page
[Ouvrir la page avec des données fictive](https://getpapillon.xyz/note?d=eyJoZWFkZXIiOnsidXNlcm5hbWUiOiJGYW5ueSIsInN1YmplY3QiOiJBbmdsYWlzIExWMSIsImNvbG9yIjoiI0YzOUMxMiJ9LCJkYXRhIjp7Im5vdGUiOiIxNC4wMC8yMCIsImNvbW1lbnRhcnkiOiJVbmUgZnJhbmNoZSBy6XVzc2l0ZSIsImNvZWZmIjoieDEuMDAiLCJub3RlMjAiOiIxNC4wMC8yMCIsImNsYXNzIjoiOS45NC8yMCIsIm1pbiI6IjMuMDAvMjAiLCJtYXgiOiIxNS4wMC8yMCJ9fQ==)
## 🔧 Comment ça marche
L'URL doit contenir le paramètre "d" (data), qui à comme valeur une chaîne en base64.\
**Exemple :** \
`eyJoZWFkZXIiOnsidXNlcm5hbWUiOiJGYW5ueSIsInN1YmplY3QiOiJBbmdsYWlzIExWMSIsImNvbG9yIjoiI0YzOUMxMiJ9LCJkYXRhIjp7Im5vdGUiOiIxNC4wMC8yMCIsImNvbW1lbnRhcnkiOiJVbmUgZnJhbmNoZSBy6XVzc2l0ZSIsImNvZWZmIjoieDEuMDAiLCJub3RlMjAiOiIxNC4wMC8yMCIsImNsYXNzIjoiOS45NC8yMCIsIm1pbiI6IjMuMDAvMjAiLCJtYXgiOiIxNS4wMC8yMCJ9fQ==`\
**Contenu traduit :** \
```json
{
	"header": {
		"username":"Fanny",
		"subject":"Anglais LV1",
		"color":"#F39C12"
	}, "data": {
		"note":"14.00/20",
		"commentary":"Une franche réussite",
		"coeff":"x1.00",
		"note20":"14.00/20",
		"class":"9.94/20",
		"min":"3.00/20",
		"max":"15.00/20"
	}
}
```

Le javascript en bas de la page note.html, se charge d'afficher les valeurs du paramètre "d" sur la page.

Si le paramètre "d" n'est pas présent, ou que les paramètres sont invalides, elle renverra vers un easter egg.
