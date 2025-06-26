# @expo-google-fonts/menbere

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/menbere)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/menbere)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/menbere)

This package lets you use the [**Menbere**](https://fonts.google.com/specimen/Menbere) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Menbere

![Menbere](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Menbere_100Thin`
- `Menbere_200ExtraLight`
- `Menbere_300Light`
- `Menbere_400Regular`
- `Menbere_500Medium`
- `Menbere_600SemiBold`
- `Menbere_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/menbere expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/menbere/useFonts';
import { Menbere_100Thin } from '@expo-google-fonts/menbere/100Thin';
import { Menbere_200ExtraLight } from '@expo-google-fonts/menbere/200ExtraLight';
import { Menbere_300Light } from '@expo-google-fonts/menbere/300Light';
import { Menbere_400Regular } from '@expo-google-fonts/menbere/400Regular';
import { Menbere_500Medium } from '@expo-google-fonts/menbere/500Medium';
import { Menbere_600SemiBold } from '@expo-google-fonts/menbere/600SemiBold';
import { Menbere_700Bold } from '@expo-google-fonts/menbere/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Menbere_100Thin, 
    Menbere_200ExtraLight, 
    Menbere_300Light, 
    Menbere_400Regular, 
    Menbere_500Medium, 
    Menbere_600SemiBold, 
    Menbere_700Bold
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
          fontFamily: "Menbere_100Thin"
        }}>
          Menbere Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Menbere_200ExtraLight"
        }}>
          Menbere Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Menbere_300Light"
        }}>
          Menbere Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Menbere_400Regular"
        }}>
          Menbere Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Menbere_500Medium"
        }}>
          Menbere Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Menbere_600SemiBold"
        }}>
          Menbere Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Menbere_700Bold"
        }}>
          Menbere Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Menbere_100Thin](./100Thin/Menbere_100Thin.ttf.png)|![Menbere_200ExtraLight](./200ExtraLight/Menbere_200ExtraLight.ttf.png)|![Menbere_300Light](./300Light/Menbere_300Light.ttf.png)||
|![Menbere_400Regular](./400Regular/Menbere_400Regular.ttf.png)|![Menbere_500Medium](./500Medium/Menbere_500Medium.ttf.png)|![Menbere_600SemiBold](./600SemiBold/Menbere_600SemiBold.ttf.png)||
|![Menbere_700Bold](./700Bold/Menbere_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/menbere` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Menbere page on Google Fonts](https://fonts.google.com/specimen/Menbere) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Menbere on Google Fonts](https://fonts.google.com/specimen/Menbere)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/menbere)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/menbere)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
