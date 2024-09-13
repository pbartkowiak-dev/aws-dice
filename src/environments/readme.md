# Environments

You should create several environment files in the `src/environments` directory (they are all excluded from the version control):

* `environment.development.ts`
* `environment.local.ts`
* `environment.ts`

## Development

Running `npm run start:local` should start the application using `environment.local.ts`, while `npm run start` should use `environment.development.ts`.

The content of the `environment.local.ts` should look like this:

```
export const environment = {
  production: false,
  useLambda: false,
  apiUrl: '',
};
```

This way the app should make no lambda requests while you run `start:local`. On the contrary, `environment.development.ts` should have `useLambda` set to `true` and the `apiUrl` pointing towards the expected lambda URL.
