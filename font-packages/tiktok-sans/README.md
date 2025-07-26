# @expo-google-fonts/tiktok-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tiktok-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tiktok-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tiktok-sans)

This package lets you use the [**TikTok Sans**](https://fonts.google.com/specimen/TikTok+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## TikTok Sans

![TikTok Sans](./font-family.png)

This font family contains [7 styles](#-gallery).

- `TikTokSans_300Light`
- `TikTokSans_400Regular`
- `TikTokSans_500Medium`
- `TikTokSans_600SemiBold`
- `TikTokSans_700Bold`
- `TikTokSans_800ExtraBold`
- `TikTokSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tiktok-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tiktok-sans/useFonts';
import { TikTokSans_300Light } from '@expo-google-fonts/tiktok-sans/300Light';
import { TikTokSans_400Regular } from '@expo-google-fonts/tiktok-sans/400Regular';
import { TikTokSans_500Medium } from '@expo-google-fonts/tiktok-sans/500Medium';
import { TikTokSans_600SemiBold } from '@expo-google-fonts/tiktok-sans/600SemiBold';
import { TikTokSans_700Bold } from '@expo-google-fonts/tiktok-sans/700Bold';
import { TikTokSans_800ExtraBold } from '@expo-google-fonts/tiktok-sans/800ExtraBold';
import { TikTokSans_900Black } from '@expo-google-fonts/tiktok-sans/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    TikTokSans_300Light, 
    TikTokSans_400Regular, 
    TikTokSans_500Medium, 
    TikTokSans_600SemiBold, 
    TikTokSans_700Bold, 
    TikTokSans_800ExtraBold, 
    TikTokSans_900Black
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
          fontFamily: "TikTokSans_300Light"
        }}>
          TikTok Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TikTokSans_400Regular"
        }}>
          TikTok Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TikTokSans_500Medium"
        }}>
          TikTok Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TikTokSans_600SemiBold"
        }}>
          TikTok Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TikTokSans_700Bold"
        }}>
          TikTok Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TikTokSans_800ExtraBold"
        }}>
          TikTok Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TikTokSans_900Black"
        }}>
          TikTok Sans Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![TikTokSans_300Light](./300Light/TikTokSans_300Light.ttf.png)|![TikTokSans_400Regular](./400Regular/TikTokSans_400Regular.ttf.png)|![TikTokSans_500Medium](./500Medium/TikTokSans_500Medium.ttf.png)||
|![TikTokSans_600SemiBold](./600SemiBold/TikTokSans_600SemiBold.ttf.png)|![TikTokSans_700Bold](./700Bold/TikTokSans_700Bold.ttf.png)|![TikTokSans_800ExtraBold](./800ExtraBold/TikTokSans_800ExtraBold.ttf.png)||
|![TikTokSans_900Black](./900Black/TikTokSans_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tiktok-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [TikTok Sans page on Google Fonts](https://fonts.google.com/specimen/TikTok+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [TikTok Sans on Google Fonts](https://fonts.google.com/specimen/TikTok+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tiktok-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tiktok-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
