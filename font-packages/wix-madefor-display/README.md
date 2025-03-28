# @expo-google-fonts/wix-madefor-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/wix-madefor-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/wix-madefor-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/wix-madefor-display)

This package lets you use the [**Wix Madefor Display**](https://fonts.google.com/specimen/Wix+Madefor+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Wix Madefor Display

![Wix Madefor Display](./font-family.png)

This font family contains [5 styles](#-gallery).

- `WixMadeforDisplay_400Regular`
- `WixMadeforDisplay_500Medium`
- `WixMadeforDisplay_600SemiBold`
- `WixMadeforDisplay_700Bold`
- `WixMadeforDisplay_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/wix-madefor-display expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/wix-madefor-display/useFonts';
import { WixMadeforDisplay_400Regular } from '@expo-google-fonts/wix-madefor-display/400Regular';
import { WixMadeforDisplay_500Medium } from '@expo-google-fonts/wix-madefor-display/500Medium';
import { WixMadeforDisplay_600SemiBold } from '@expo-google-fonts/wix-madefor-display/600SemiBold';
import { WixMadeforDisplay_700Bold } from '@expo-google-fonts/wix-madefor-display/700Bold';
import { WixMadeforDisplay_800ExtraBold } from '@expo-google-fonts/wix-madefor-display/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    WixMadeforDisplay_400Regular, 
    WixMadeforDisplay_500Medium, 
    WixMadeforDisplay_600SemiBold, 
    WixMadeforDisplay_700Bold, 
    WixMadeforDisplay_800ExtraBold
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
          fontFamily: "WixMadeforDisplay_400Regular"
        }}>
          Wix Madefor Display Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforDisplay_500Medium"
        }}>
          Wix Madefor Display Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforDisplay_600SemiBold"
        }}>
          Wix Madefor Display Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforDisplay_700Bold"
        }}>
          Wix Madefor Display Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WixMadeforDisplay_800ExtraBold"
        }}>
          Wix Madefor Display Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![WixMadeforDisplay_400Regular](./400Regular/WixMadeforDisplay_400Regular.ttf.png)|![WixMadeforDisplay_500Medium](./500Medium/WixMadeforDisplay_500Medium.ttf.png)|![WixMadeforDisplay_600SemiBold](./600SemiBold/WixMadeforDisplay_600SemiBold.ttf.png)||
|![WixMadeforDisplay_700Bold](./700Bold/WixMadeforDisplay_700Bold.ttf.png)|![WixMadeforDisplay_800ExtraBold](./800ExtraBold/WixMadeforDisplay_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/wix-madefor-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Wix Madefor Display page on Google Fonts](https://fonts.google.com/specimen/Wix+Madefor+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Wix Madefor Display on Google Fonts](https://fonts.google.com/specimen/Wix+Madefor+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/wix-madefor-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/wix-madefor-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
