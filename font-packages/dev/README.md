# @expo-google-fonts/dev


If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Usage

Usage is the same as any individual Expo Google Fonts package except that 
you can important any font variant from any font family from `@expo-google-fonts/dev`.

#### Install the package

```js
expo install @expo-google-fonts/dev expo-font expo-app-loading
```

#### In your app

```js
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/dev';
...
```

etc.

