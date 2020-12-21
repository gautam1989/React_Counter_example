import { INCREMENT, DECREMENT, RESET ,INCREMENT_BY} from '../actions'

const INITIAL_STATE =
{
    count : 0,
}

function handleChange(state, change)
{
    const { count } = state;
    return (
        {
        count: count + change,
      }
    )
    
}

export default function counter(state = INITIAL_STATE, action)
{
    const { count } = state;
    switch( action.type )
    {
        case INCREMENT:
            return handleChange(state, 1);
        case DECREMENT:
            return handleChange(state, -1);
        case RESET:
            return handleChange(state, -count);
        case INCREMENT_BY:
            return handleChange(state,action.payload.content)
        default:
            return state;
    }
}