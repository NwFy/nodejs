const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c6ced22ddc0b43ca9a0725b7895b75fa');
const inquirer = require('inquirer');

let Motclef
let Domaine

const getUserChoices = async () => {
inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Sur quel domaine votre recherche porte-t-elle?',
        name: 'Domaine',
        choices: [
        'sports',
        'technology',
        'entertainment',
        'general',
        'health',
        'science'
        ]
    },
    {
       type: 'input',
       message: 'Quel est l\'objet de votre recherche?',
       name: 'Motclef'
    }

]).then((answers) => {
	console.log(answers.Domaine)
	console.log(answers.Motclef)
	api(answers.Motclef, answers.Domaine)
	})
}

getUserChoices()

async function api(Motclef, Domaine) {
	data = await newsapi.v2.topHeadlines({
	  q: Motclef,
	  category: Domaine,
	  language: 'fr'
	});
	console.log(data)
}