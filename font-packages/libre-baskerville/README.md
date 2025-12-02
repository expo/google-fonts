# @expo-google-fonts/libre-baskerville

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/libre-baskerville)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/libre-baskerville)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/libre-baskerville)

This package lets you use the [**Libre Baskerville**](https://fonts.google.com/specimen/Libre+Baskerville) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Libre Baskerville

![Libre Baskerville](./font-family.png)

This font family contains [8 styles](#-gallery).

- `LibreBaskerville_400Regular`
- `LibreBaskerville_500Medium`
- `LibreBaskerville_600SemiBold`
- `LibreBaskerville_700Bold`
- `LibreBaskerville_400Regular_Italic`
- `LibreBaskerville_500Medium_Italic`
- `LibreBaskerville_600SemiBold_Italic`
- `LibreBaskerville_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/libre-baskerville expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/libre-baskerville/useFonts';
import { LibreBaskerville_400Regular } from '@expo-google-fonts/libre-baskerville/400Regular';
import { LibreBaskerville_500Medium } from '@expo-google-fonts/libre-baskerville/500Medium';
import { LibreBaskerville_600SemiBold } from '@expo-google-fonts/libre-baskerville/600SemiBold';
import { LibreBaskerville_700Bold } from '@expo-google-fonts/libre-baskerville/700Bold';
import { LibreBaskerville_400Regular_Italic } from '@expo-google-fonts/libre-baskerville/400Regular_Italic';
import { LibreBaskerville_500Medium_Italic } from '@expo-google-fonts/libre-baskerville/500Medium_Italic';
import { LibreBaskerville_600SemiBold_Italic } from '@expo-google-fonts/libre-baskerville/600SemiBold_Italic';
import { LibreBaskerville_700Bold_Italic } from '@expo-google-fonts/libre-baskerville/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    LibreBaskerville_400Regular, 
    LibreBaskerville_500Medium, 
    LibreBaskerville_600SemiBold, 
    LibreBaskerville_700Bold, 
    LibreBaskerville_400Regular_Italic, 
    LibreBaskerville_500Medium_Italic, 
    LibreBaskerville_600SemiBold_Italic, 
    LibreBaskerville_700Bold_Italic
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
          fontFamily: "LibreBaskerville_400Regular"
        }}>
          Libre Baskerville Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBaskerville_500Medium"
        }}>
          Libre Baskerville Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBaskerville_600SemiBold"
        }}>
          Libre Baskerville Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBaskerville_700Bold"
        }}>
          Libre Baskerville Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBaskerville_400Regular_Italic"
        }}>
          Libre Baskerville Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBaskerville_500Medium_Italic"
        }}>
          Libre Baskerville Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBaskerville_600SemiBold_Italic"
        }}>
          Libre Baskerville Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBaskerville_700Bold_Italic"
        }}>
          Libre Baskerville Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LibreBaskerville_400Regular](./400Regular/LibreBaskerville_400Regular.ttf.png)|![LibreBaskerville_500Medium](./500Medium/LibreBaskerville_500Medium.ttf.png)|![LibreBaskerville_600SemiBold](./600SemiBold/LibreBaskerville_600SemiBold.ttf.png)||
|![LibreBaskerville_700Bold](./700Bold/LibreBaskerville_700Bold.ttf.png)|![LibreBaskerville_400Regular_Italic](./400Regular_Italic/LibreBaskerville_400Regular_Italic.ttf.png)|![LibreBaskerville_500Medium_Italic](./500Medium_Italic/LibreBaskerville_500Medium_Italic.ttf.png)||
|![LibreBaskerville_600SemiBold_Italic](./600SemiBold_Italic/LibreBaskerville_600SemiBold_Italic.ttf.png)|![LibreBaskerville_700Bold_Italic](./700Bold_Italic/LibreBaskerville_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/libre-baskerville` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Libre Baskerville page on Google Fonts](https://fonts.google.com/specimen/Libre+Baskerville) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Libre Baskerville on Google Fonts](https://fonts.google.com/specimen/Libre+Baskerville)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-baskerville)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-baskerville)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
