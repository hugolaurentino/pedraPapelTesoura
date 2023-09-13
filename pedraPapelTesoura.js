const hugo = 'papel', victor = 'tesoura'

console.log(`
${hugo === victor ?
        'Empato' : hugo == 'pedra' && victor == 'tesoura' ?
            'Hugo venceu' : hugo == 'tesoura' && victor == 'papela' ?
                'Hugo venceu' : hugo == 'papel' && victor == 'pedra' ?
                    'Hugo venceu' : 'Victor venceu'
    }
`);