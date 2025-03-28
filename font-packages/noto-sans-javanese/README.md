# @expo-google-fonts/noto-sans-javanese

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-javanese)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-javanese)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-javanese)

This package lets you use the [**Noto Sans Javanese**](https://fonts.google.com/specimen/Noto+Sans+Javanese) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Javanese

![Noto Sans Javanese](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSansJavanese_400Regular`
- `NotoSansJavanese_500Medium`
- `NotoSansJavanese_600SemiBold`
- `NotoSansJavanese_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-javanese expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-javanese/useFonts';
import { NotoSansJavanese_400Regular } from '@expo-google-fonts/noto-sans-javanese/400Regular';
import { NotoSansJavanese_500Medium } from '@expo-google-fonts/noto-sans-javanese/500Medium';
import { NotoSansJavanese_600SemiBold } from '@expo-google-fonts/noto-sans-javanese/600SemiBold';
import { NotoSansJavanese_700Bold } from '@expo-google-fonts/noto-sans-javanese/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansJavanese_400Regular, 
    NotoSansJavanese_500Medium, 
    NotoSansJavanese_600SemiBold, 
    NotoSansJavanese_700Bold
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
          fontFamily: "NotoSansJavanese_400Regular"
        }}>
          Noto Sans Javanese Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJavanese_500Medium"
        }}>
          Noto Sans Javanese Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJavanese_600SemiBold"
        }}>
          Noto Sans Javanese Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJavanese_700Bold"
        }}>
          Noto Sans Javanese Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansJavanese_400Regular](./400Regular/NotoSansJavanese_400Regular.ttf.png)|![NotoSansJavanese_500Medium](./500Medium/NotoSansJavanese_500Medium.ttf.png)|![NotoSansJavanese_600SemiBold](./600SemiBold/NotoSansJavanese_600SemiBold.ttf.png)||
|![NotoSansJavanese_700Bold](./700Bold/NotoSansJavanese_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-javanese` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Javanese page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Javanese) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Javanese on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Javanese)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-javanese)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-javanese)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
