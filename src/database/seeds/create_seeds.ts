import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Mapa da América Latina', image: 'latinoamerica.jpg'},
        { title: 'Item 2', image: 'item2.png'},
        { title: 'Item 3', image: 'item3.png'},
        { title: 'Item 4', image: 'item4.png'},
        { title: 'Item 5', image: 'item5.png'},
    ])
}