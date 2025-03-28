# @expo-google-fonts/besley

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/besley)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/besley)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/besley)

This package lets you use the [**Besley**](https://fonts.google.com/specimen/Besley) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Besley

![Besley](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Besley_400Regular`
- `Besley_500Medium`
- `Besley_600SemiBold`
- `Besley_700Bold`
- `Besley_800ExtraBold`
- `Besley_900Black`
- `Besley_400Regular_Italic`
- `Besley_500Medium_Italic`
- `Besley_600SemiBold_Italic`
- `Besley_700Bold_Italic`
- `Besley_800ExtraBold_Italic`
- `Besley_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/besley expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/besley/useFonts';
import { Besley_400Regular } from '@expo-google-fonts/besley/400Regular';
import { Besley_500Medium } from '@expo-google-fonts/besley/500Medium';
import { Besley_600SemiBold } from '@expo-google-fonts/besley/600SemiBold';
import { Besley_700Bold } from '@expo-google-fonts/besley/700Bold';
import { Besley_800ExtraBold } from '@expo-google-fonts/besley/800ExtraBold';
import { Besley_900Black } from '@expo-google-fonts/besley/900Black';
import { Besley_400Regular_Italic } from '@expo-google-fonts/besley/400Regular_Italic';
import { Besley_500Medium_Italic } from '@expo-google-fonts/besley/500Medium_Italic';
import { Besley_600SemiBold_Italic } from '@expo-google-fonts/besley/600SemiBold_Italic';
import { Besley_700Bold_Italic } from '@expo-google-fonts/besley/700Bold_Italic';
import { Besley_800ExtraBold_Italic } from '@expo-google-fonts/besley/800ExtraBold_Italic';
import { Besley_900Black_Italic } from '@expo-google-fonts/besley/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Besley_400Regular, 
    Besley_500Medium, 
    Besley_600SemiBold, 
    Besley_700Bold, 
    Besley_800ExtraBold, 
    Besley_900Black, 
    Besley_400Regular_Italic, 
    Besley_500Medium_Italic, 
    Besley_600SemiBold_Italic, 
    Besley_700Bold_Italic, 
    Besley_800ExtraBold_Italic, 
    Besley_900Black_Italic
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
          fontFamily: "Besley_400Regular"
        }}>
          Besley Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_500Medium"
        }}>
          Besley Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_600SemiBold"
        }}>
          Besley Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_700Bold"
        }}>
          Besley Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_800ExtraBold"
        }}>
          Besley Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_900Black"
        }}>
          Besley Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_400Regular_Italic"
        }}>
          Besley Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_500Medium_Italic"
        }}>
          Besley Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_600SemiBold_Italic"
        }}>
          Besley Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_700Bold_Italic"
        }}>
          Besley Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_800ExtraBold_Italic"
        }}>
          Besley Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Besley_900Black_Italic"
        }}>
          Besley Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Besley_400Regular](./400Regular/Besley_400Regular.ttf.png)|![Besley_500Medium](./500Medium/Besley_500Medium.ttf.png)|![Besley_600SemiBold](./600SemiBold/Besley_600SemiBold.ttf.png)||
|![Besley_700Bold](./700Bold/Besley_700Bold.ttf.png)|![Besley_800ExtraBold](./800ExtraBold/Besley_800ExtraBold.ttf.png)|![Besley_900Black](./900Black/Besley_900Black.ttf.png)||
|![Besley_400Regular_Italic](./400Regular_Italic/Besley_400Regular_Italic.ttf.png)|![Besley_500Medium_Italic](./500Medium_Italic/Besley_500Medium_Italic.ttf.png)|![Besley_600SemiBold_Italic](./600SemiBold_Italic/Besley_600SemiBold_Italic.ttf.png)||
|![Besley_700Bold_Italic](./700Bold_Italic/Besley_700Bold_Italic.ttf.png)|![Besley_800ExtraBold_Italic](./800ExtraBold_Italic/Besley_800ExtraBold_Italic.ttf.png)|![Besley_900Black_Italic](./900Black_Italic/Besley_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/besley` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Besley page on Google Fonts](https://fonts.google.com/specimen/Besley) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Besley on Google Fonts](https://fonts.google.com/specimen/Besley)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/besley)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/besley)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
