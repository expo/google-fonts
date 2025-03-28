# @expo-google-fonts/proza-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/proza-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/proza-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/proza-libre)

This package lets you use the [**Proza Libre**](https://fonts.google.com/specimen/Proza+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Proza Libre

![Proza Libre](./font-family.png)

This font family contains [10 styles](#-gallery).

- `ProzaLibre_400Regular`
- `ProzaLibre_400Regular_Italic`
- `ProzaLibre_500Medium`
- `ProzaLibre_500Medium_Italic`
- `ProzaLibre_600SemiBold`
- `ProzaLibre_600SemiBold_Italic`
- `ProzaLibre_700Bold`
- `ProzaLibre_700Bold_Italic`
- `ProzaLibre_800ExtraBold`
- `ProzaLibre_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/proza-libre expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/proza-libre/useFonts';
import { ProzaLibre_400Regular } from '@expo-google-fonts/proza-libre/400Regular';
import { ProzaLibre_400Regular_Italic } from '@expo-google-fonts/proza-libre/400Regular_Italic';
import { ProzaLibre_500Medium } from '@expo-google-fonts/proza-libre/500Medium';
import { ProzaLibre_500Medium_Italic } from '@expo-google-fonts/proza-libre/500Medium_Italic';
import { ProzaLibre_600SemiBold } from '@expo-google-fonts/proza-libre/600SemiBold';
import { ProzaLibre_600SemiBold_Italic } from '@expo-google-fonts/proza-libre/600SemiBold_Italic';
import { ProzaLibre_700Bold } from '@expo-google-fonts/proza-libre/700Bold';
import { ProzaLibre_700Bold_Italic } from '@expo-google-fonts/proza-libre/700Bold_Italic';
import { ProzaLibre_800ExtraBold } from '@expo-google-fonts/proza-libre/800ExtraBold';
import { ProzaLibre_800ExtraBold_Italic } from '@expo-google-fonts/proza-libre/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ProzaLibre_400Regular, 
    ProzaLibre_400Regular_Italic, 
    ProzaLibre_500Medium, 
    ProzaLibre_500Medium_Italic, 
    ProzaLibre_600SemiBold, 
    ProzaLibre_600SemiBold_Italic, 
    ProzaLibre_700Bold, 
    ProzaLibre_700Bold_Italic, 
    ProzaLibre_800ExtraBold, 
    ProzaLibre_800ExtraBold_Italic
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
          fontFamily: "ProzaLibre_400Regular"
        }}>
          Proza Libre Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_400Regular_Italic"
        }}>
          Proza Libre Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_500Medium"
        }}>
          Proza Libre Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_500Medium_Italic"
        }}>
          Proza Libre Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_600SemiBold"
        }}>
          Proza Libre Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_600SemiBold_Italic"
        }}>
          Proza Libre Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_700Bold"
        }}>
          Proza Libre Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_700Bold_Italic"
        }}>
          Proza Libre Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_800ExtraBold"
        }}>
          Proza Libre Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ProzaLibre_800ExtraBold_Italic"
        }}>
          Proza Libre Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ProzaLibre_400Regular](./400Regular/ProzaLibre_400Regular.ttf.png)|![ProzaLibre_400Regular_Italic](./400Regular_Italic/ProzaLibre_400Regular_Italic.ttf.png)|![ProzaLibre_500Medium](./500Medium/ProzaLibre_500Medium.ttf.png)||
|![ProzaLibre_500Medium_Italic](./500Medium_Italic/ProzaLibre_500Medium_Italic.ttf.png)|![ProzaLibre_600SemiBold](./600SemiBold/ProzaLibre_600SemiBold.ttf.png)|![ProzaLibre_600SemiBold_Italic](./600SemiBold_Italic/ProzaLibre_600SemiBold_Italic.ttf.png)||
|![ProzaLibre_700Bold](./700Bold/ProzaLibre_700Bold.ttf.png)|![ProzaLibre_700Bold_Italic](./700Bold_Italic/ProzaLibre_700Bold_Italic.ttf.png)|![ProzaLibre_800ExtraBold](./800ExtraBold/ProzaLibre_800ExtraBold.ttf.png)||
|![ProzaLibre_800ExtraBold_Italic](./800ExtraBold_Italic/ProzaLibre_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/proza-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Proza Libre page on Google Fonts](https://fonts.google.com/specimen/Proza+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Proza Libre on Google Fonts](https://fonts.google.com/specimen/Proza+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/proza-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/proza-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
