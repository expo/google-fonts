# @expo-google-fonts/strichpunkt-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/strichpunkt-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/strichpunkt-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/strichpunkt-sans)

This package lets you use the [**Strichpunkt Sans**](https://fonts.google.com/specimen/Strichpunkt+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Strichpunkt Sans

![Strichpunkt Sans](./font-family.png)

This font family contains [6 styles](#-gallery).

- `StrichpunktSans_400Regular`
- `StrichpunktSans_500Medium`
- `StrichpunktSans_600SemiBold`
- `StrichpunktSans_700Bold`
- `StrichpunktSans_800ExtraBold`
- `StrichpunktSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/strichpunkt-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/strichpunkt-sans/useFonts';
import { StrichpunktSans_400Regular } from '@expo-google-fonts/strichpunkt-sans/400Regular';
import { StrichpunktSans_500Medium } from '@expo-google-fonts/strichpunkt-sans/500Medium';
import { StrichpunktSans_600SemiBold } from '@expo-google-fonts/strichpunkt-sans/600SemiBold';
import { StrichpunktSans_700Bold } from '@expo-google-fonts/strichpunkt-sans/700Bold';
import { StrichpunktSans_800ExtraBold } from '@expo-google-fonts/strichpunkt-sans/800ExtraBold';
import { StrichpunktSans_900Black } from '@expo-google-fonts/strichpunkt-sans/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    StrichpunktSans_400Regular, 
    StrichpunktSans_500Medium, 
    StrichpunktSans_600SemiBold, 
    StrichpunktSans_700Bold, 
    StrichpunktSans_800ExtraBold, 
    StrichpunktSans_900Black
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StrichpunktSans_400Regular"
        }}>
          Strichpunkt Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StrichpunktSans_500Medium"
        }}>
          Strichpunkt Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StrichpunktSans_600SemiBold"
        }}>
          Strichpunkt Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StrichpunktSans_700Bold"
        }}>
          Strichpunkt Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StrichpunktSans_800ExtraBold"
        }}>
          Strichpunkt Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StrichpunktSans_900Black"
        }}>
          Strichpunkt Sans Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![StrichpunktSans_400Regular](./400Regular/StrichpunktSans_400Regular.ttf.png)|![StrichpunktSans_500Medium](./500Medium/StrichpunktSans_500Medium.ttf.png)|![StrichpunktSans_600SemiBold](./600SemiBold/StrichpunktSans_600SemiBold.ttf.png)||
|![StrichpunktSans_700Bold](./700Bold/StrichpunktSans_700Bold.ttf.png)|![StrichpunktSans_800ExtraBold](./800ExtraBold/StrichpunktSans_800ExtraBold.ttf.png)|![StrichpunktSans_900Black](./900Black/StrichpunktSans_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/strichpunkt-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Strichpunkt Sans page on Google Fonts](https://fonts.google.com/specimen/Strichpunkt+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Strichpunkt Sans on Google Fonts](https://fonts.google.com/specimen/Strichpunkt+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/strichpunkt-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/strichpunkt-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
