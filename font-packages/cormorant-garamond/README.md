# @expo-google-fonts/cormorant-garamond

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant-garamond)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant-garamond)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant-garamond)

This package lets you use the [**Cormorant Garamond**](https://fonts.google.com/specimen/Cormorant+Garamond) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cormorant Garamond

![Cormorant Garamond](./font-family.png)

This font family contains [10 styles](#-gallery).

- `CormorantGaramond_300Light`
- `CormorantGaramond_400Regular`
- `CormorantGaramond_500Medium`
- `CormorantGaramond_600SemiBold`
- `CormorantGaramond_700Bold`
- `CormorantGaramond_300Light_Italic`
- `CormorantGaramond_400Regular_Italic`
- `CormorantGaramond_500Medium_Italic`
- `CormorantGaramond_600SemiBold_Italic`
- `CormorantGaramond_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/cormorant-garamond expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/cormorant-garamond/useFonts';
import { CormorantGaramond_300Light } from '@expo-google-fonts/cormorant-garamond/300Light';
import { CormorantGaramond_400Regular } from '@expo-google-fonts/cormorant-garamond/400Regular';
import { CormorantGaramond_500Medium } from '@expo-google-fonts/cormorant-garamond/500Medium';
import { CormorantGaramond_600SemiBold } from '@expo-google-fonts/cormorant-garamond/600SemiBold';
import { CormorantGaramond_700Bold } from '@expo-google-fonts/cormorant-garamond/700Bold';
import { CormorantGaramond_300Light_Italic } from '@expo-google-fonts/cormorant-garamond/300Light_Italic';
import { CormorantGaramond_400Regular_Italic } from '@expo-google-fonts/cormorant-garamond/400Regular_Italic';
import { CormorantGaramond_500Medium_Italic } from '@expo-google-fonts/cormorant-garamond/500Medium_Italic';
import { CormorantGaramond_600SemiBold_Italic } from '@expo-google-fonts/cormorant-garamond/600SemiBold_Italic';
import { CormorantGaramond_700Bold_Italic } from '@expo-google-fonts/cormorant-garamond/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    CormorantGaramond_300Light, 
    CormorantGaramond_400Regular, 
    CormorantGaramond_500Medium, 
    CormorantGaramond_600SemiBold, 
    CormorantGaramond_700Bold, 
    CormorantGaramond_300Light_Italic, 
    CormorantGaramond_400Regular_Italic, 
    CormorantGaramond_500Medium_Italic, 
    CormorantGaramond_600SemiBold_Italic, 
    CormorantGaramond_700Bold_Italic
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
          fontFamily: "CormorantGaramond_300Light"
        }}>
          Cormorant Garamond Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_400Regular"
        }}>
          Cormorant Garamond Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_500Medium"
        }}>
          Cormorant Garamond Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_600SemiBold"
        }}>
          Cormorant Garamond Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_700Bold"
        }}>
          Cormorant Garamond Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_300Light_Italic"
        }}>
          Cormorant Garamond Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_400Regular_Italic"
        }}>
          Cormorant Garamond Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_500Medium_Italic"
        }}>
          Cormorant Garamond Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_600SemiBold_Italic"
        }}>
          Cormorant Garamond Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantGaramond_700Bold_Italic"
        }}>
          Cormorant Garamond Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![CormorantGaramond_300Light](./300Light/CormorantGaramond_300Light.ttf.png)|![CormorantGaramond_400Regular](./400Regular/CormorantGaramond_400Regular.ttf.png)|![CormorantGaramond_500Medium](./500Medium/CormorantGaramond_500Medium.ttf.png)||
|![CormorantGaramond_600SemiBold](./600SemiBold/CormorantGaramond_600SemiBold.ttf.png)|![CormorantGaramond_700Bold](./700Bold/CormorantGaramond_700Bold.ttf.png)|![CormorantGaramond_300Light_Italic](./300Light_Italic/CormorantGaramond_300Light_Italic.ttf.png)||
|![CormorantGaramond_400Regular_Italic](./400Regular_Italic/CormorantGaramond_400Regular_Italic.ttf.png)|![CormorantGaramond_500Medium_Italic](./500Medium_Italic/CormorantGaramond_500Medium_Italic.ttf.png)|![CormorantGaramond_600SemiBold_Italic](./600SemiBold_Italic/CormorantGaramond_600SemiBold_Italic.ttf.png)||
|![CormorantGaramond_700Bold_Italic](./700Bold_Italic/CormorantGaramond_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/cormorant-garamond` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant Garamond page on Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant Garamond on Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-garamond)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-garamond)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
