const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,   
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }
   
export function extractingProperties(obj) { 
    const result =[];
    const { special } = obj;
    special.forEach((elem) => {
        let {id, name, icon, description} = elem;

        if(description === undefined)  {
            description = 'Описание недоступно';
        }

        result.push({id, name, description, icon});   
    })
    
    return result;
}

const attackOptions = extractingProperties(character);
console.log(attackOptions);
