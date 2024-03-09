import type { UseFetchOptions} from 'nuxt/app'
import { defu } from 'defu'

// Based off of https://nuxt.com/docs/examples/advanced/use-custom-fetch-composable
export function useAuthenticatedFetch<T> (url: string | (() => string), _options: UseFetchOptions<T> = {}) {
    // @ts-ignore
    const config = useRuntimeConfig();
    const token = localStorage.getItem('token');


    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.apiDomain,
        retry: 1,
        onRequest ({options}) {
            if (token){
                options.headers = {
                    ...options.headers,
                    'Authorization': `Bearer ${token}`
                }
            }
        },
        async onResponse ({response}) {
            try {
                const parsedResponse = JSON.parse(response._data);
                if (parsedResponse.token) {
                    localStorage.setItem('token', parsedResponse.token);
                }
            } catch (ignored) {
            }
        }
    }
    // for nice deep defaults, please use unjs/defu
    const params = defu(_options, defaults);

    // @ts-ignore
    return $fetch(url, params)
}