# ff-sdk-demo

Demo of using the FF SDK both within an app and a library.

> Please note, this is rough demo code. There are warnings and some issues, but the general approach should work.

## Getting started

1. clone the repo
2. in the root of the repo run `npm i`
3. when complete run `npm run dev`
4. open the URL posted in the output

## Toggling flags

When you log into the sample Harness account, you'll have 2 projects

- **BY Library** this controls the flags used within the library
- **BY App** this controls the flags used within the app

The app is set up to stream changes, so toggling a flag in either of these projects should be reflected in the app
within a second or two.

## Approach

The sample code uses Turbo for quickly being able to spin up a monorepo with both the App and UI library. This is a
great tool, but for this example, you can largely ignore it and look at `app/web` for the App and `packages/ui` for the
UI library.

Because of the way React handles context resolution, if both the App and UI library's use of the `FFContextProvider`
were in the same tree, any use of the context by either the App or the UI library would access the closest FF context up
the tree. One possible solution is to instead make the `FFContextProvider` usages siblings and use one to feed internal
state that can then be accessed by either the App or the UI library. In this example, I chose to hold the UI library's
flags in state.

The UI library itself does not use the FF SDK directly, but rather has its own context provider and hook and flags are
injected into that context by the parent app. You can see this super-simple context and hook approach
in `packages/ui/UIFF.tsx` and it's usage in a component in `packages/ui/card.tsx`.

In the App, you can see the injecting mechanism in `apps/web/src/App.tsx`. A benefit of this approach is that when unit
testing your UI library, you do not need to mock anything, but rather just wrap your component in a `FFUIProvider`
component with the flag state you want to test.
