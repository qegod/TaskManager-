// booleanCl = {
//  name: 'active',
//  condition: true || false

interface boleanClass {
    name: string,
    codition: boolean,
}


export function classUse(requireCl: string[], boleanCl?: boleanClass[]) {
    const classes: string[] = [];

    requireCl.forEach(item => (
        classes.push(item)
    ));

    if(boleanCl) {
        boleanCl.forEach(item => (
            item.codition ? classes.push(item.name) : null
        ))
    }

    return classes.join(' ');
}