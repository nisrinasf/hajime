function getLosAngelesPoints(results) {  
  let calculate = []; 

   results.map(result => {
    name = result[0]
    score = result[1].split(':')[0]

  if(/Los Angeles\s[A-Z][a-z]+/.test(name)){
    calculate.push(parseInt(score))
  }
  })

  return calculate.reduce((acc, curr) => acc + curr, 0);
}

const basketballResults = [
      ['Golden State Warriors', '559:503'],
      ['Memphis Grizzlies', '550:511'],
      ['Portland Trail Blazers', '527:520'],
      ['Houston Rockets', '494:458'],
      ['San Antonio Spurs', '469:460'],
      ['Phoenix Suns', '523:522'],
      ['Minnesota Timberwolves', '495:494'],
      ['Utah Jazz', '399:402'],
      ['Sacramento Kings', '420:431'],
      ['Denver Nuggets', '646:658'],
      ['Los Angeles Clippers', '382:422'],
      ['Dallas Mavericks', '492:513'],
      ['Los Angeles Lakers', '641:637'],
      ['Happy Los Angeles', '641:637'],
      ['Los Angeles', '641:637'],
      ['Los Angelesio Thunders', '641:637'],
      ['los angeles masters', '641:637'],
      ['Los Angeles M', '641:637'],
      ['Oklahoma City Thunder', '315:318'],
      ['New Orleans Pelicans', '433:454']
    ];

console.log(getLosAngelesPoints(basketballResults))//1023