# @expo-google-fonts/fira-sans-extra-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fira-sans-extra-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fira-sans-extra-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fira-sans-extra-condensed)

This package lets you use the [**Fira Sans Extra Condensed**](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fira Sans Extra Condensed

![Fira Sans Extra Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `FiraSansExtraCondensed_100Thin`
- `FiraSansExtraCondensed_100Thin_Italic`
- `FiraSansExtraCondensed_200ExtraLight`
- `FiraSansExtraCondensed_200ExtraLight_Italic`
- `FiraSansExtraCondensed_300Light`
- `FiraSansExtraCondensed_300Light_Italic`
- `FiraSansExtraCondensed_400Regular`
- `FiraSansExtraCondensed_400Regular_Italic`
- `FiraSansExtraCondensed_500Medium`
- `FiraSansExtraCondensed_500Medium_Italic`
- `FiraSansExtraCondensed_600SemiBold`
- `FiraSansExtraCondensed_600SemiBold_Italic`
- `FiraSansExtraCondensed_700Bold`
- `FiraSansExtraCondensed_700Bold_Italic`
- `FiraSansExtraCondensed_800ExtraBold`
- `FiraSansExtraCondensed_800ExtraBold_Italic`
- `FiraSansExtraCondensed_900Black`
- `FiraSansExtraCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/fira-sans-extra-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/fira-sans-extra-condensed/useFonts';
import { FiraSansExtraCondensed_100Thin } from '@expo-google-fonts/fira-sans-extra-condensed/100Thin';
import { FiraSansExtraCondensed_100Thin_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/100Thin_Italic';
import { FiraSansExtraCondensed_200ExtraLight } from '@expo-google-fonts/fira-sans-extra-condensed/200ExtraLight';
import { FiraSansExtraCondensed_200ExtraLight_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/200ExtraLight_Italic';
import { FiraSansExtraCondensed_300Light } from '@expo-google-fonts/fira-sans-extra-condensed/300Light';
import { FiraSansExtraCondensed_300Light_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/300Light_Italic';
import { FiraSansExtraCondensed_400Regular } from '@expo-google-fonts/fira-sans-extra-condensed/400Regular';
import { FiraSansExtraCondensed_400Regular_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/400Regular_Italic';
import { FiraSansExtraCondensed_500Medium } from '@expo-google-fonts/fira-sans-extra-condensed/500Medium';
import { FiraSansExtraCondensed_500Medium_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/500Medium_Italic';
import { FiraSansExtraCondensed_600SemiBold } from '@expo-google-fonts/fira-sans-extra-condensed/600SemiBold';
import { FiraSansExtraCondensed_600SemiBold_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/600SemiBold_Italic';
import { FiraSansExtraCondensed_700Bold } from '@expo-google-fonts/fira-sans-extra-condensed/700Bold';
import { FiraSansExtraCondensed_700Bold_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/700Bold_Italic';
import { FiraSansExtraCondensed_800ExtraBold } from '@expo-google-fonts/fira-sans-extra-condensed/800ExtraBold';
import { FiraSansExtraCondensed_800ExtraBold_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/800ExtraBold_Italic';
import { FiraSansExtraCondensed_900Black } from '@expo-google-fonts/fira-sans-extra-condensed/900Black';
import { FiraSansExtraCondensed_900Black_Italic } from '@expo-google-fonts/fira-sans-extra-condensed/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    FiraSansExtraCondensed_100Thin, 
    FiraSansExtraCondensed_100Thin_Italic, 
    FiraSansExtraCondensed_200ExtraLight, 
    FiraSansExtraCondensed_200ExtraLight_Italic, 
    FiraSansExtraCondensed_300Light, 
    FiraSansExtraCondensed_300Light_Italic, 
    FiraSansExtraCondensed_400Regular, 
    FiraSansExtraCondensed_400Regular_Italic, 
    FiraSansExtraCondensed_500Medium, 
    FiraSansExtraCondensed_500Medium_Italic, 
    FiraSansExtraCondensed_600SemiBold, 
    FiraSansExtraCondensed_600SemiBold_Italic, 
    FiraSansExtraCondensed_700Bold, 
    FiraSansExtraCondensed_700Bold_Italic, 
    FiraSansExtraCondensed_800ExtraBold, 
    FiraSansExtraCondensed_800ExtraBold_Italic, 
    FiraSansExtraCondensed_900Black, 
    FiraSansExtraCondensed_900Black_Italic
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
          fontFamily: "FiraSansExtraCondensed_100Thin"
        }}>
          Fira Sans Extra Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_100Thin_Italic"
        }}>
          Fira Sans Extra Condensed Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_200ExtraLight"
        }}>
          Fira Sans Extra Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_200ExtraLight_Italic"
        }}>
          Fira Sans Extra Condensed Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_300Light"
        }}>
          Fira Sans Extra Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_300Light_Italic"
        }}>
          Fira Sans Extra Condensed Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_400Regular"
        }}>
          Fira Sans Extra Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_400Regular_Italic"
        }}>
          Fira Sans Extra Condensed Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_500Medium"
        }}>
          Fira Sans Extra Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_500Medium_Italic"
        }}>
          Fira Sans Extra Condensed Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_600SemiBold"
        }}>
          Fira Sans Extra Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_600SemiBold_Italic"
        }}>
          Fira Sans Extra Condensed Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_700Bold"
        }}>
          Fira Sans Extra Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_700Bold_Italic"
        }}>
          Fira Sans Extra Condensed Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_800ExtraBold"
        }}>
          Fira Sans Extra Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_800ExtraBold_Italic"
        }}>
          Fira Sans Extra Condensed Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_900Black"
        }}>
          Fira Sans Extra Condensed Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansExtraCondensed_900Black_Italic"
        }}>
          Fira Sans Extra Condensed Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FiraSansExtraCondensed_100Thin](./100Thin/FiraSansExtraCondensed_100Thin.ttf.png)|![FiraSansExtraCondensed_100Thin_Italic](./100Thin_Italic/FiraSansExtraCondensed_100Thin_Italic.ttf.png)|![FiraSansExtraCondensed_200ExtraLight](./200ExtraLight/FiraSansExtraCondensed_200ExtraLight.ttf.png)||
|![FiraSansExtraCondensed_200ExtraLight_Italic](./200ExtraLight_Italic/FiraSansExtraCondensed_200ExtraLight_Italic.ttf.png)|![FiraSansExtraCondensed_300Light](./300Light/FiraSansExtraCondensed_300Light.ttf.png)|![FiraSansExtraCondensed_300Light_Italic](./300Light_Italic/FiraSansExtraCondensed_300Light_Italic.ttf.png)||
|![FiraSansExtraCondensed_400Regular](./400Regular/FiraSansExtraCondensed_400Regular.ttf.png)|![FiraSansExtraCondensed_400Regular_Italic](./400Regular_Italic/FiraSansExtraCondensed_400Regular_Italic.ttf.png)|![FiraSansExtraCondensed_500Medium](./500Medium/FiraSansExtraCondensed_500Medium.ttf.png)||
|![FiraSansExtraCondensed_500Medium_Italic](./500Medium_Italic/FiraSansExtraCondensed_500Medium_Italic.ttf.png)|![FiraSansExtraCondensed_600SemiBold](./600SemiBold/FiraSansExtraCondensed_600SemiBold.ttf.png)|![FiraSansExtraCondensed_600SemiBold_Italic](./600SemiBold_Italic/FiraSansExtraCondensed_600SemiBold_Italic.ttf.png)||
|![FiraSansExtraCondensed_700Bold](./700Bold/FiraSansExtraCondensed_700Bold.ttf.png)|![FiraSansExtraCondensed_700Bold_Italic](./700Bold_Italic/FiraSansExtraCondensed_700Bold_Italic.ttf.png)|![FiraSansExtraCondensed_800ExtraBold](./800ExtraBold/FiraSansExtraCondensed_800ExtraBold.ttf.png)||
|![FiraSansExtraCondensed_800ExtraBold_Italic](./800ExtraBold_Italic/FiraSansExtraCondensed_800ExtraBold_Italic.ttf.png)|![FiraSansExtraCondensed_900Black](./900Black/FiraSansExtraCondensed_900Black.ttf.png)|![FiraSansExtraCondensed_900Black_Italic](./900Black_Italic/FiraSansExtraCondensed_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/fira-sans-extra-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fira Sans Extra Condensed page on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fira Sans Extra Condensed on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fira-sans-extra-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fira-sans-extra-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
