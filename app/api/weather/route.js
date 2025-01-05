export async function GET (request){

    const city = request.nextUrl.searchParams.get('city');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`

    try{
        const response = await fetch(url);
        const result = await response.json();
        return new Response(
            JSON.stringify(result),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    }
    catch(error){
        return new Response(
            { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
    }

}