//4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.  

const numberSouvenirs = +prompt('Сколько у вас сувениров?');
const gramSouvenirs = 75;

const numberTrinkets = +prompt('Сколько у вас безделушек?');
const gramTrinkets = 112;

const totalWeight = numberSouvenirs * gramSouvenirs + numberTrinkets * gramTrinkets;
console.log(`The total weight is - ${totalWeight} gram!`)