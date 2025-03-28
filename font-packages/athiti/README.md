# @expo-google-fonts/athiti

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/athiti)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/athiti)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/athiti)

This package lets you use the [**Athiti**](https://fonts.google.com/specimen/Athiti) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Athiti

![Athiti](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Athiti_200ExtraLight`
- `Athiti_300Light`
- `Athiti_400Regular`
- `Athiti_500Medium`
- `Athiti_600SemiBold`
- `Athiti_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/athiti expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/athiti/useFonts';
import { Athiti_200ExtraLight } from '@expo-google-fonts/athiti/200ExtraLight';
import { Athiti_300Light } from '@expo-google-fonts/athiti/300Light';
import { Athiti_400Regular } from '@expo-google-fonts/athiti/400Regular';
import { Athiti_500Medium } from '@expo-google-fonts/athiti/500Medium';
import { Athiti_600SemiBold } from '@expo-google-fonts/athiti/600SemiBold';
import { Athiti_700Bold } from '@expo-google-fonts/athiti/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Athiti_200ExtraLight, 
    Athiti_300Light, 
    Athiti_400Regular, 
    Athiti_500Medium, 
    Athiti_600SemiBold, 
    Athiti_700Bold
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
          fontFamily: "Athiti_200ExtraLight"
        }}>
          Athiti Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Athiti_300Light"
        }}>
          Athiti Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Athiti_400Regular"
        }}>
          Athiti Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Athiti_500Medium"
        }}>
          Athiti Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Athiti_600SemiBold"
        }}>
          Athiti Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Athiti_700Bold"
        }}>
          Athiti Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Athiti_200ExtraLight](./200ExtraLight/Athiti_200ExtraLight.ttf.png)|![Athiti_300Light](./300Light/Athiti_300Light.ttf.png)|![Athiti_400Regular](./400Regular/Athiti_400Regular.ttf.png)||
|![Athiti_500Medium](./500Medium/Athiti_500Medium.ttf.png)|![Athiti_600SemiBold](./600SemiBold/Athiti_600SemiBold.ttf.png)|![Athiti_700Bold](./700Bold/Athiti_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/athiti` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Athiti page on Google Fonts](https://fonts.google.com/specimen/Athiti) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Athiti on Google Fonts](https://fonts.google.com/specimen/Athiti)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/athiti)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/athiti)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
