export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const INCREMENT_BY = 'INCREMENT_BY';

export function increment() 
{
    return  ({ type : INCREMENT });
}


export function decrement() 
{
    return  ({ type : DECREMENT });
}

export function reset() 
{
    return  ({ type : RESET });
}

export function incrementby(content)
{
    return ({type: INCREMENT_BY, payload : {content}});
}