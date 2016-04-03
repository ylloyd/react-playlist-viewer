import fetchJSON from "app/fetchJSON"
import consts from "app/consts"

export const GET = "molotov/someartists/GET"
export const SET = "molotov/someartists/SET"
export const ERROR = "molotov/someartists/ERROR"

const initialState = {
  loading:true
}


// redux reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {

    case GET:
        return {
            loading:true
        }

    case SET:
        return {
            ...action.response
        }

    case ERROR:
        /* eslint-disable no-console */
        console.error(ERROR, action.error)
        /* eslint-disable no-console */
        return {
            error: (
                action.error && action.error.data &&
                action.error.data.error && action.error.data.error.user_message
            ) || true
        }

    default:
        return state
    }
}

// redux actions
export function get(id) {
    return {
        types: [
            GET,
            SET,
            ERROR,
        ],
        promise: (
            fetchJSON(consts.api.enpoints.getSomeArtists(), {
                method: "GET"
            })
        )
    }
}
