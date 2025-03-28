# @expo-google-fonts/saira-extra-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira-extra-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira-extra-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira-extra-condensed)

This package lets you use the [**Saira Extra Condensed**](https://fonts.google.com/specimen/Saira+Extra+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Saira Extra Condensed

![Saira Extra Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `SairaExtraCondensed_100Thin`
- `SairaExtraCondensed_200ExtraLight`
- `SairaExtraCondensed_300Light`
- `SairaExtraCondensed_400Regular`
- `SairaExtraCondensed_500Medium`
- `SairaExtraCondensed_600SemiBold`
- `SairaExtraCondensed_700Bold`
- `SairaExtraCondensed_800ExtraBold`
- `SairaExtraCondensed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/saira-extra-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/saira-extra-condensed/useFonts';
import { SairaExtraCondensed_100Thin } from '@expo-google-fonts/saira-extra-condensed/100Thin';
import { SairaExtraCondensed_200ExtraLight } from '@expo-google-fonts/saira-extra-condensed/200ExtraLight';
import { SairaExtraCondensed_300Light } from '@expo-google-fonts/saira-extra-condensed/300Light';
import { SairaExtraCondensed_400Regular } from '@expo-google-fonts/saira-extra-condensed/400Regular';
import { SairaExtraCondensed_500Medium } from '@expo-google-fonts/saira-extra-condensed/500Medium';
import { SairaExtraCondensed_600SemiBold } from '@expo-google-fonts/saira-extra-condensed/600SemiBold';
import { SairaExtraCondensed_700Bold } from '@expo-google-fonts/saira-extra-condensed/700Bold';
import { SairaExtraCondensed_800ExtraBold } from '@expo-google-fonts/saira-extra-condensed/800ExtraBold';
import { SairaExtraCondensed_900Black } from '@expo-google-fonts/saira-extra-condensed/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    SairaExtraCondensed_100Thin, 
    SairaExtraCondensed_200ExtraLight, 
    SairaExtraCondensed_300Light, 
    SairaExtraCondensed_400Regular, 
    SairaExtraCondensed_500Medium, 
    SairaExtraCondensed_600SemiBold, 
    SairaExtraCondensed_700Bold, 
    SairaExtraCondensed_800ExtraBold, 
    SairaExtraCondensed_900Black
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
          fontFamily: "SairaExtraCondensed_100Thin"
        }}>
          Saira Extra Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_200ExtraLight"
        }}>
          Saira Extra Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_300Light"
        }}>
          Saira Extra Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_400Regular"
        }}>
          Saira Extra Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_500Medium"
        }}>
          Saira Extra Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_600SemiBold"
        }}>
          Saira Extra Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_700Bold"
        }}>
          Saira Extra Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_800ExtraBold"
        }}>
          Saira Extra Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaExtraCondensed_900Black"
        }}>
          Saira Extra Condensed Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SairaExtraCondensed_100Thin](./100Thin/SairaExtraCondensed_100Thin.ttf.png)|![SairaExtraCondensed_200ExtraLight](./200ExtraLight/SairaExtraCondensed_200ExtraLight.ttf.png)|![SairaExtraCondensed_300Light](./300Light/SairaExtraCondensed_300Light.ttf.png)||
|![SairaExtraCondensed_400Regular](./400Regular/SairaExtraCondensed_400Regular.ttf.png)|![SairaExtraCondensed_500Medium](./500Medium/SairaExtraCondensed_500Medium.ttf.png)|![SairaExtraCondensed_600SemiBold](./600SemiBold/SairaExtraCondensed_600SemiBold.ttf.png)||
|![SairaExtraCondensed_700Bold](./700Bold/SairaExtraCondensed_700Bold.ttf.png)|![SairaExtraCondensed_800ExtraBold](./800ExtraBold/SairaExtraCondensed_800ExtraBold.ttf.png)|![SairaExtraCondensed_900Black](./900Black/SairaExtraCondensed_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/saira-extra-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira Extra Condensed page on Google Fonts](https://fonts.google.com/specimen/Saira+Extra+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira Extra Condensed on Google Fonts](https://fonts.google.com/specimen/Saira+Extra+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-extra-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-extra-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
