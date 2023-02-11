import { useFetch, useCounter } from '../hook';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    // const { quote, author } = !!data && data[0];
    // console.log(data)
    return (
        <>
            <h1>Breakin Bad Quotes</h1>
            <hr />

            {
                isLoading 
                  ? 
                    <LoadingQuote  /> : <Quote quote={data[0]}/>
                    // : data.map((elem) => {
                    //     return <Quote quote={elem}/>
                    // })

            }

            <button 
                className="btn btn-success" 
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next Quote
            </button>
        </>
    )
}
