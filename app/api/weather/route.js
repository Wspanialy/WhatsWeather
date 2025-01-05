export async function GET (request){

    const searchParams = request.nextUrl.searchParams;
    const city = searchParams.get('city');
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
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
            JSON.stringify({message: "City not found"}),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
    }

}