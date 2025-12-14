# @expo-google-fonts/lilex

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lilex)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lilex)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lilex)

This package lets you use the [**Lilex**](https://fonts.google.com/specimen/Lilex) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lilex

![Lilex](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Lilex_100Thin`
- `Lilex_200ExtraLight`
- `Lilex_300Light`
- `Lilex_400Regular`
- `Lilex_500Medium`
- `Lilex_600SemiBold`
- `Lilex_700Bold`
- `Lilex_100Thin_Italic`
- `Lilex_200ExtraLight_Italic`
- `Lilex_300Light_Italic`
- `Lilex_400Regular_Italic`
- `Lilex_500Medium_Italic`
- `Lilex_600SemiBold_Italic`
- `Lilex_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lilex expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lilex/useFonts';
import { Lilex_100Thin } from '@expo-google-fonts/lilex/100Thin';
import { Lilex_200ExtraLight } from '@expo-google-fonts/lilex/200ExtraLight';
import { Lilex_300Light } from '@expo-google-fonts/lilex/300Light';
import { Lilex_400Regular } from '@expo-google-fonts/lilex/400Regular';
import { Lilex_500Medium } from '@expo-google-fonts/lilex/500Medium';
import { Lilex_600SemiBold } from '@expo-google-fonts/lilex/600SemiBold';
import { Lilex_700Bold } from '@expo-google-fonts/lilex/700Bold';
import { Lilex_100Thin_Italic } from '@expo-google-fonts/lilex/100Thin_Italic';
import { Lilex_200ExtraLight_Italic } from '@expo-google-fonts/lilex/200ExtraLight_Italic';
import { Lilex_300Light_Italic } from '@expo-google-fonts/lilex/300Light_Italic';
import { Lilex_400Regular_Italic } from '@expo-google-fonts/lilex/400Regular_Italic';
import { Lilex_500Medium_Italic } from '@expo-google-fonts/lilex/500Medium_Italic';
import { Lilex_600SemiBold_Italic } from '@expo-google-fonts/lilex/600SemiBold_Italic';
import { Lilex_700Bold_Italic } from '@expo-google-fonts/lilex/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Lilex_100Thin, 
    Lilex_200ExtraLight, 
    Lilex_300Light, 
    Lilex_400Regular, 
    Lilex_500Medium, 
    Lilex_600SemiBold, 
    Lilex_700Bold, 
    Lilex_100Thin_Italic, 
    Lilex_200ExtraLight_Italic, 
    Lilex_300Light_Italic, 
    Lilex_400Regular_Italic, 
    Lilex_500Medium_Italic, 
    Lilex_600SemiBold_Italic, 
    Lilex_700Bold_Italic
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
          fontFamily: "Lilex_100Thin"
        }}>
          Lilex Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_200ExtraLight"
        }}>
          Lilex Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_300Light"
        }}>
          Lilex Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_400Regular"
        }}>
          Lilex Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_500Medium"
        }}>
          Lilex Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_600SemiBold"
        }}>
          Lilex Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_700Bold"
        }}>
          Lilex Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_100Thin_Italic"
        }}>
          Lilex Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_200ExtraLight_Italic"
        }}>
          Lilex Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_300Light_Italic"
        }}>
          Lilex Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_400Regular_Italic"
        }}>
          Lilex Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_500Medium_Italic"
        }}>
          Lilex Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_600SemiBold_Italic"
        }}>
          Lilex Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lilex_700Bold_Italic"
        }}>
          Lilex Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Lilex_100Thin](./100Thin/Lilex_100Thin.ttf.png)|![Lilex_200ExtraLight](./200ExtraLight/Lilex_200ExtraLight.ttf.png)|![Lilex_300Light](./300Light/Lilex_300Light.ttf.png)||
|![Lilex_400Regular](./400Regular/Lilex_400Regular.ttf.png)|![Lilex_500Medium](./500Medium/Lilex_500Medium.ttf.png)|![Lilex_600SemiBold](./600SemiBold/Lilex_600SemiBold.ttf.png)||
|![Lilex_700Bold](./700Bold/Lilex_700Bold.ttf.png)|![Lilex_100Thin_Italic](./100Thin_Italic/Lilex_100Thin_Italic.ttf.png)|![Lilex_200ExtraLight_Italic](./200ExtraLight_Italic/Lilex_200ExtraLight_Italic.ttf.png)||
|![Lilex_300Light_Italic](./300Light_Italic/Lilex_300Light_Italic.ttf.png)|![Lilex_400Regular_Italic](./400Regular_Italic/Lilex_400Regular_Italic.ttf.png)|![Lilex_500Medium_Italic](./500Medium_Italic/Lilex_500Medium_Italic.ttf.png)||
|![Lilex_600SemiBold_Italic](./600SemiBold_Italic/Lilex_600SemiBold_Italic.ttf.png)|![Lilex_700Bold_Italic](./700Bold_Italic/Lilex_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lilex` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lilex page on Google Fonts](https://fonts.google.com/specimen/Lilex) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lilex on Google Fonts](https://fonts.google.com/specimen/Lilex)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lilex)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lilex)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
