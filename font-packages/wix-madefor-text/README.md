# @expo-google-fonts/wix-madefor-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/wix-madefor-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/wix-madefor-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/wix-madefor-text)

This package lets you use the [**Wix Madefor Text**](https://fonts.google.com/specimen/Wix+Madefor+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Wix Madefor Text

![Wix Madefor Text](./font-family.png)

This font family contains [10 styles](#-gallery).

- `WixMadeforText_400Regular`
- `WixMadeforText_400Regular_Italic`
- `WixMadeforText_500Medium`
- `WixMadeforText_500Medium_Italic`
- `WixMadeforText_600SemiBold`
- `WixMadeforText_600SemiBold_Italic`
- `WixMadeforText_700Bold`
- `WixMadeforText_700Bold_Italic`
- `WixMadeforText_800ExtraBold`
- `WixMadeforText_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/wix-madefor-text expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/wix-madefor-text/useFonts';
import { WixMadeforText_400Regular } from '@expo-google-fonts/wix-madefor-text/400Regular';
import { WixMadeforText_400Regular_Italic } from '@expo-google-fonts/wix-madefor-text/400Regular_Italic';
import { WixMadeforText_500Medium } from '@expo-google-fonts/wix-madefor-text/500Medium';
import { WixMadeforText_500Medium_Italic } from '@expo-google-fonts/wix-madefor-text/500Medium_Italic';
import { WixMadeforText_600SemiBold } from '@expo-google-fonts/wix-madefor-text/600SemiBold';
import { WixMadeforText_600SemiBold_Italic } from '@expo-google-fonts/wix-madefor-text/600SemiBold_Italic';
import { WixMadeforText_700Bold } from '@expo-google-fonts/wix-madefor-text/700Bold';
import { WixMadeforText_700Bold_Italic } from '@expo-google-fonts/wix-madefor-text/700Bold_Italic';
import { WixMadeforText_800ExtraBold } from '@expo-google-fonts/wix-madefor-text/800ExtraBold';
import { WixMadeforText_800ExtraBold_Italic } from '@expo-google-fonts/wix-madefor-text/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    WixMadeforText_400Regular, 
    WixMadeforText_400Regular_Italic, 
    WixMadeforText_500Medium, 
    WixMadeforText_500Medium_Italic, 
    WixMadeforText_600SemiBold, 
    WixMadeforText_600SemiBold_Italic, 
    WixMadeforText_700Bold, 
    WixMadeforText_700Bold_Italic, 
    WixMadeforText_800ExtraBold, 
    WixMadeforText_800ExtraBold_Italic
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
          fontFamily: "WixMadeforText_400Regular"
        }}>
          Wix Madefor Text Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_400Regular_Italic"
        }}>
          Wix Madefor Text Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_500Medium"
        }}>
          Wix Madefor Text Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_500Medium_Italic"
        }}>
          Wix Madefor Text Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_600SemiBold"
        }}>
          Wix Madefor Text Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_600SemiBold_Italic"
        }}>
          Wix Madefor Text Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_700Bold"
        }}>
          Wix Madefor Text Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_700Bold_Italic"
        }}>
          Wix Madefor Text Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_800ExtraBold"
        }}>
          Wix Madefor Text Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforText_800ExtraBold_Italic"
        }}>
          Wix Madefor Text Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![WixMadeforText_400Regular](./400Regular/WixMadeforText_400Regular.ttf.png)|![WixMadeforText_400Regular_Italic](./400Regular_Italic/WixMadeforText_400Regular_Italic.ttf.png)|![WixMadeforText_500Medium](./500Medium/WixMadeforText_500Medium.ttf.png)||
|![WixMadeforText_500Medium_Italic](./500Medium_Italic/WixMadeforText_500Medium_Italic.ttf.png)|![WixMadeforText_600SemiBold](./600SemiBold/WixMadeforText_600SemiBold.ttf.png)|![WixMadeforText_600SemiBold_Italic](./600SemiBold_Italic/WixMadeforText_600SemiBold_Italic.ttf.png)||
|![WixMadeforText_700Bold](./700Bold/WixMadeforText_700Bold.ttf.png)|![WixMadeforText_700Bold_Italic](./700Bold_Italic/WixMadeforText_700Bold_Italic.ttf.png)|![WixMadeforText_800ExtraBold](./800ExtraBold/WixMadeforText_800ExtraBold.ttf.png)||
|![WixMadeforText_800ExtraBold_Italic](./800ExtraBold_Italic/WixMadeforText_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/wix-madefor-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Wix Madefor Text page on Google Fonts](https://fonts.google.com/specimen/Wix+Madefor+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Wix Madefor Text on Google Fonts](https://fonts.google.com/specimen/Wix+Madefor+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/wix-madefor-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/wix-madefor-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
