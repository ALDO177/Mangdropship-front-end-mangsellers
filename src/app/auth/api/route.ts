
import {NextResponse, type NextRequest} from 'next/server';

export async function GET(request: NextRequest){
    const getPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
        'method' : 'GET',
    });

    const data = await getPokemon.json();
    return NextResponse.json({data});
}