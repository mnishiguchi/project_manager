/**
 * Stores the auth token (JWT) in the local storage.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
export function storeAuthToken(jwt) {
    window.localStorage.setItem('phoenixAuthToken', jwt)
}

/**
 * @return {Object} The auth token (JWT) for the current user if it exists.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
export function getAuthToken() {
    return window.localStorage.getItem('phoenixAuthToken')
}
