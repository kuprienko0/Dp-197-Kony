const table = ['91%','81%','72%','81%','97%','84%','83%','76%','92%','82%','82%','87%','72%','87%','73%','83%','88%','92%','92%','98%','81%','89%','83%','91%','83%','73%','84%','67%','81%','93%','89%','93%','98%','82%','93%','82%','91%','93%','77%','83%','82%','84%','94%','91%','82%','96%','84%','90%','99%','91%','68%','71%','87%','86%','79%','98%','90%','76%','97%','83%','71%','69%','75%','81%','73%','75%','74%','98%','72%','61%','72%','67%','82%','93%','93%','78%','89%','85%','91%','64%','88%','92%','96%','81%','72%','60%','58%','89%','92%','76%','77%','94%','92%','100%','88%','97%','84%','72%','100%','71%','100%','82%','92%','100%','100%','79%','100%','71%','82%','86%','71%','82%','83%','85%','81%','100%','93%','84%','82%','67%','100%','82%','93%','66%','92%','67%','100%','89%','100%','92%','77%','100%','85%','82%','81%','83%','95%','100%','100%','100%','74%','93%','93%','100%'];

const zodiacs = ['Овен','Телец','Близнецы','Рак','Лев','Дева','Весы','Скорпион','Стрелец','Козерог','Водолей','Рыбы'];

const heartRange = {
    '1': [60, 69],
    '2': [70, 79],
    '3': [80, 89],
    '4': [90, 99],
    '5': [100, 100]
}

export function getZodiac(user){
    // 1993-07-20T09:44:18.674Z
    const dob = new Date(user.dob.date);
    const month = dob.getMonth();
    return  zodiacs[month];
}

export function getCompatibility(users){
    const xy = {
        male : 'x',
        female : 'y'
    };
    const zodiacs = users.reduce((acc, el) => {
        console.log(el);
        acc[xy[el.gender]] = new Date(el.dob.date).getMonth();
        return acc;
    },{});

    const tableId = zodiacs.y * 12 + zodiacs.x;
    console.log(zodiacs)
    return table[tableId];
};
export function checkCompatibility( users, heartsNumber){
    let compatibility = getCompatibility(users);

    compatibility = Number(compatibility.split('').splice(0,compatibility.length-1).join(''));
    const range = heartRange[heartsNumber];
    if (compatibility >= range[0] && compatibility <= range[1]) {
        return `<h2>Вы угадали!<\h2><p><h3>Совместимость пары ${compatibility}%.<\h3><\p>`
    } else {
        return `<h2>Вы не угадали!<\h2><p><h3>Совместимость пары ${compatibility}%.<\h3><\p>`
    }
}