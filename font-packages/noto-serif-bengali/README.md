# @expo-google-fonts/noto-serif-bengali

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-bengali)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-bengali)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-bengali)

This package lets you use the [**Noto Serif Bengali**](https://fonts.google.com/specimen/Noto+Serif+Bengali) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Bengali

![Noto Serif Bengali](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifBengali_100Thin`
- `NotoSerifBengali_200ExtraLight`
- `NotoSerifBengali_300Light`
- `NotoSerifBengali_400Regular`
- `NotoSerifBengali_500Medium`
- `NotoSerifBengali_600SemiBold`
- `NotoSerifBengali_700Bold`
- `NotoSerifBengali_800ExtraBold`
- `NotoSerifBengali_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-bengali expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-bengali/useFonts';
import { NotoSerifBengali_100Thin } from '@expo-google-fonts/noto-serif-bengali/100Thin';
import { NotoSerifBengali_200ExtraLight } from '@expo-google-fonts/noto-serif-bengali/200ExtraLight';
import { NotoSerifBengali_300Light } from '@expo-google-fonts/noto-serif-bengali/300Light';
import { NotoSerifBengali_400Regular } from '@expo-google-fonts/noto-serif-bengali/400Regular';
import { NotoSerifBengali_500Medium } from '@expo-google-fonts/noto-serif-bengali/500Medium';
import { NotoSerifBengali_600SemiBold } from '@expo-google-fonts/noto-serif-bengali/600SemiBold';
import { NotoSerifBengali_700Bold } from '@expo-google-fonts/noto-serif-bengali/700Bold';
import { NotoSerifBengali_800ExtraBold } from '@expo-google-fonts/noto-serif-bengali/800ExtraBold';
import { NotoSerifBengali_900Black } from '@expo-google-fonts/noto-serif-bengali/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifBengali_100Thin, 
    NotoSerifBengali_200ExtraLight, 
    NotoSerifBengali_300Light, 
    NotoSerifBengali_400Regular, 
    NotoSerifBengali_500Medium, 
    NotoSerifBengali_600SemiBold, 
    NotoSerifBengali_700Bold, 
    NotoSerifBengali_800ExtraBold, 
    NotoSerifBengali_900Black
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
          fontFamily: "NotoSerifBengali_100Thin"
        }}>
          Noto Serif Bengali Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_200ExtraLight"
        }}>
          Noto Serif Bengali Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_300Light"
        }}>
          Noto Serif Bengali Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_400Regular"
        }}>
          Noto Serif Bengali Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_500Medium"
        }}>
          Noto Serif Bengali Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_600SemiBold"
        }}>
          Noto Serif Bengali Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_700Bold"
        }}>
          Noto Serif Bengali Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_800ExtraBold"
        }}>
          Noto Serif Bengali Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifBengali_900Black"
        }}>
          Noto Serif Bengali Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifBengali_100Thin](./100Thin/NotoSerifBengali_100Thin.ttf.png)|![NotoSerifBengali_200ExtraLight](./200ExtraLight/NotoSerifBengali_200ExtraLight.ttf.png)|![NotoSerifBengali_300Light](./300Light/NotoSerifBengali_300Light.ttf.png)||
|![NotoSerifBengali_400Regular](./400Regular/NotoSerifBengali_400Regular.ttf.png)|![NotoSerifBengali_500Medium](./500Medium/NotoSerifBengali_500Medium.ttf.png)|![NotoSerifBengali_600SemiBold](./600SemiBold/NotoSerifBengali_600SemiBold.ttf.png)||
|![NotoSerifBengali_700Bold](./700Bold/NotoSerifBengali_700Bold.ttf.png)|![NotoSerifBengali_800ExtraBold](./800ExtraBold/NotoSerifBengali_800ExtraBold.ttf.png)|![NotoSerifBengali_900Black](./900Black/NotoSerifBengali_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-bengali` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Bengali page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Bengali) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Bengali on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Bengali)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-bengali)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-bengali)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
