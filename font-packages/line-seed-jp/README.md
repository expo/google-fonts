# @expo-google-fonts/line-seed-jp

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/line-seed-jp)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/line-seed-jp)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/line-seed-jp)

This package lets you use the [**LINE Seed JP**](https://fonts.google.com/specimen/LINE+Seed+JP) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## LINE Seed JP

![LINE Seed JP](./font-family.png)

This font family contains [4 styles](#-gallery).

- `LINESeedJP_100Thin`
- `LINESeedJP_400Regular`
- `LINESeedJP_700Bold`
- `LINESeedJP_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/line-seed-jp expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/line-seed-jp/useFonts';
import { LINESeedJP_100Thin } from '@expo-google-fonts/line-seed-jp/100Thin';
import { LINESeedJP_400Regular } from '@expo-google-fonts/line-seed-jp/400Regular';
import { LINESeedJP_700Bold } from '@expo-google-fonts/line-seed-jp/700Bold';
import { LINESeedJP_800ExtraBold } from '@expo-google-fonts/line-seed-jp/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    LINESeedJP_100Thin, 
    LINESeedJP_400Regular, 
    LINESeedJP_700Bold, 
    LINESeedJP_800ExtraBold
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
          fontFamily: "LINESeedJP_100Thin"
        }}>
          LINE Seed JP Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LINESeedJP_400Regular"
        }}>
          LINE Seed JP Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LINESeedJP_700Bold"
        }}>
          LINE Seed JP Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LINESeedJP_800ExtraBold"
        }}>
          LINE Seed JP Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LINESeedJP_100Thin](./100Thin/LINESeedJP_100Thin.ttf.png)|![LINESeedJP_400Regular](./400Regular/LINESeedJP_400Regular.ttf.png)|![LINESeedJP_700Bold](./700Bold/LINESeedJP_700Bold.ttf.png)||
|![LINESeedJP_800ExtraBold](./800ExtraBold/LINESeedJP_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/line-seed-jp` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [LINE Seed JP page on Google Fonts](https://fonts.google.com/specimen/LINE+Seed+JP) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [LINE Seed JP on Google Fonts](https://fonts.google.com/specimen/LINE+Seed+JP)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/line-seed-jp)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/line-seed-jp)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
