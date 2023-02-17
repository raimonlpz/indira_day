

type Day =
    | 'today'
    | 'tomorrow'
    | 'yesterday';


export default async function GetAztro({
    day = 'today'
}: { day: Day }) {
    const URL = `https://aztro.sameerkumar.website/?sign=aquarius&day=${day}`

    return fetch(URL, {
        method: 'POST'
    });
}