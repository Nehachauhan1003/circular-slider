import op from '../assets/olive_pizza_clear.png'
import sp from '../assets/shrim_pizza_clear.png'
import mp from '../assets/margeretta_pizza_clear.png'
import tp from '../assets/tomato_pizza_clear.png'
import pp from '../assets/pepperoni_pizza_clear.png'
import ch from '../assets/cheese_clear.png';
import bch from '../assets/block_cheese_clear.png'
import jal from '../assets/jalapenos_clear.png'
import pepp from '../assets/pepperoniclear.png';
import sh from '../assets/shrimp_clear.png'
import mu from '../assets/mushroom_clear.png'
import tom from '../assets/tomatoes_clear.png'

export const arr = [
    {
        id: 1,
        name: 'Jalapenos Pizza',
        desc: "Ignite your taste buds with our Jalapeño and Olive pizza. Spicy jalapeños and zesty olives on a flavorful crust deliver a bold and satisfying slice.",
        url: op,
        bg: '#8baf4d', rbg: jal,
        lbg: pepp,
        rDeg: '-85'
    }, {
        id: 2,
        name: 'Shrimp Pizza',
        desc: "Savor the ocean's bounty on a slice of heaven with our shrimp pizza - a delicious blend of juicy shrimp and savory pizza perfection, sure to tantalize your taste buds! ",
        url: sp,
        bg: '#c12f12', rbg: sh,
        lbg: ch,
        rDeg: '-50'
    },
    {
        id: 3,
        name: 'Margherita Pizza',
        desc: "Elevate your taste buds with our Margherita pizza with creamy mozzarella on a thin, heavenly crust for an Italian classic that's simply irresistible.",
        url: mp,
        bg: '#af622d',
        rbg: ch,
        lbg: bch,
        rDeg: '0'

    }, {
        id: 4,
        name: 'Mushroom Pizza',
        desc: "Savor a medley of earthy mushrooms, ripe tomatoes, and zesty olives atop our pizza canvas, delivering a delightful combination of flavors and textures that'll satisfy your every craving.",
        url: tp,
        bg: '#e69020', rbg: mu,
        lbg: tom,
        rDeg: '50'
    }, {
        id: 5,
        name: 'Pepproni Pizza',
        desc: "Savor the bold combo of Pepperoni and Olives on our pizza. Spicy pepperoni and zesty olives meet on a savory crust for a satisfying slice that packs a punch.",
        url: pp,
        bg: '#ec4b1f',
        rbg: ch,
        lbg: pepp,
        rDeg: '85'
    }
]
