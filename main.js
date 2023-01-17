let str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jump over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록 
`

//const regexp = new RegExp('aaa','gi')


console.log(
    str.match(/(?<=\@).{1,}/g)   
)

//console.log(regexp.test(str))
//console.log(str.replace(regexp, 'JIN'))
// str = str.replace(regexp, 'JIN')
// console.log(str)






