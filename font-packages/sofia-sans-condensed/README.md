# @expo-google-fonts/sofia-sans-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sofia-sans-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sofia-sans-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sofia-sans-condensed)

This package lets you use the [**Sofia Sans Condensed**](https://fonts.google.com/specimen/Sofia+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sofia Sans Condensed

![Sofia Sans Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `SofiaSansCondensed_100Thin`
- `SofiaSansCondensed_200ExtraLight`
- `SofiaSansCondensed_300Light`
- `SofiaSansCondensed_400Regular`
- `SofiaSansCondensed_500Medium`
- `SofiaSansCondensed_600SemiBold`
- `SofiaSansCondensed_700Bold`
- `SofiaSansCondensed_800ExtraBold`
- `SofiaSansCondensed_900Black`
- `SofiaSansCondensed_100Thin_Italic`
- `SofiaSansCondensed_200ExtraLight_Italic`
- `SofiaSansCondensed_300Light_Italic`
- `SofiaSansCondensed_400Regular_Italic`
- `SofiaSansCondensed_500Medium_Italic`
- `SofiaSansCondensed_600SemiBold_Italic`
- `SofiaSansCondensed_700Bold_Italic`
- `SofiaSansCondensed_800ExtraBold_Italic`
- `SofiaSansCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/sofia-sans-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/sofia-sans-condensed/useFonts';
import { SofiaSansCondensed_100Thin } from '@expo-google-fonts/sofia-sans-condensed/100Thin';
import { SofiaSansCondensed_200ExtraLight } from '@expo-google-fonts/sofia-sans-condensed/200ExtraLight';
import { SofiaSansCondensed_300Light } from '@expo-google-fonts/sofia-sans-condensed/300Light';
import { SofiaSansCondensed_400Regular } from '@expo-google-fonts/sofia-sans-condensed/400Regular';
import { SofiaSansCondensed_500Medium } from '@expo-google-fonts/sofia-sans-condensed/500Medium';
import { SofiaSansCondensed_600SemiBold } from '@expo-google-fonts/sofia-sans-condensed/600SemiBold';
import { SofiaSansCondensed_700Bold } from '@expo-google-fonts/sofia-sans-condensed/700Bold';
import { SofiaSansCondensed_800ExtraBold } from '@expo-google-fonts/sofia-sans-condensed/800ExtraBold';
import { SofiaSansCondensed_900Black } from '@expo-google-fonts/sofia-sans-condensed/900Black';
import { SofiaSansCondensed_100Thin_Italic } from '@expo-google-fonts/sofia-sans-condensed/100Thin_Italic';
import { SofiaSansCondensed_200ExtraLight_Italic } from '@expo-google-fonts/sofia-sans-condensed/200ExtraLight_Italic';
import { SofiaSansCondensed_300Light_Italic } from '@expo-google-fonts/sofia-sans-condensed/300Light_Italic';
import { SofiaSansCondensed_400Regular_Italic } from '@expo-google-fonts/sofia-sans-condensed/400Regular_Italic';
import { SofiaSansCondensed_500Medium_Italic } from '@expo-google-fonts/sofia-sans-condensed/500Medium_Italic';
import { SofiaSansCondensed_600SemiBold_Italic } from '@expo-google-fonts/sofia-sans-condensed/600SemiBold_Italic';
import { SofiaSansCondensed_700Bold_Italic } from '@expo-google-fonts/sofia-sans-condensed/700Bold_Italic';
import { SofiaSansCondensed_800ExtraBold_Italic } from '@expo-google-fonts/sofia-sans-condensed/800ExtraBold_Italic';
import { SofiaSansCondensed_900Black_Italic } from '@expo-google-fonts/sofia-sans-condensed/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    SofiaSansCondensed_100Thin, 
    SofiaSansCondensed_200ExtraLight, 
    SofiaSansCondensed_300Light, 
    SofiaSansCondensed_400Regular, 
    SofiaSansCondensed_500Medium, 
    SofiaSansCondensed_600SemiBold, 
    SofiaSansCondensed_700Bold, 
    SofiaSansCondensed_800ExtraBold, 
    SofiaSansCondensed_900Black, 
    SofiaSansCondensed_100Thin_Italic, 
    SofiaSansCondensed_200ExtraLight_Italic, 
    SofiaSansCondensed_300Light_Italic, 
    SofiaSansCondensed_400Regular_Italic, 
    SofiaSansCondensed_500Medium_Italic, 
    SofiaSansCondensed_600SemiBold_Italic, 
    SofiaSansCondensed_700Bold_Italic, 
    SofiaSansCondensed_800ExtraBold_Italic, 
    SofiaSansCondensed_900Black_Italic
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
          fontFamily: "SofiaSansCondensed_100Thin"
        }}>
          Sofia Sans Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_200ExtraLight"
        }}>
          Sofia Sans Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_300Light"
        }}>
          Sofia Sans Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_400Regular"
        }}>
          Sofia Sans Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_500Medium"
        }}>
          Sofia Sans Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_600SemiBold"
        }}>
          Sofia Sans Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_700Bold"
        }}>
          Sofia Sans Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_800ExtraBold"
        }}>
          Sofia Sans Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_900Black"
        }}>
          Sofia Sans Condensed Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_100Thin_Italic"
        }}>
          Sofia Sans Condensed Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_200ExtraLight_Italic"
        }}>
          Sofia Sans Condensed Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_300Light_Italic"
        }}>
          Sofia Sans Condensed Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_400Regular_Italic"
        }}>
          Sofia Sans Condensed Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_500Medium_Italic"
        }}>
          Sofia Sans Condensed Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_600SemiBold_Italic"
        }}>
          Sofia Sans Condensed Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_700Bold_Italic"
        }}>
          Sofia Sans Condensed Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_800ExtraBold_Italic"
        }}>
          Sofia Sans Condensed Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSansCondensed_900Black_Italic"
        }}>
          Sofia Sans Condensed Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SofiaSansCondensed_100Thin](./100Thin/SofiaSansCondensed_100Thin.ttf.png)|![SofiaSansCondensed_200ExtraLight](./200ExtraLight/SofiaSansCondensed_200ExtraLight.ttf.png)|![SofiaSansCondensed_300Light](./300Light/SofiaSansCondensed_300Light.ttf.png)||
|![SofiaSansCondensed_400Regular](./400Regular/SofiaSansCondensed_400Regular.ttf.png)|![SofiaSansCondensed_500Medium](./500Medium/SofiaSansCondensed_500Medium.ttf.png)|![SofiaSansCondensed_600SemiBold](./600SemiBold/SofiaSansCondensed_600SemiBold.ttf.png)||
|![SofiaSansCondensed_700Bold](./700Bold/SofiaSansCondensed_700Bold.ttf.png)|![SofiaSansCondensed_800ExtraBold](./800ExtraBold/SofiaSansCondensed_800ExtraBold.ttf.png)|![SofiaSansCondensed_900Black](./900Black/SofiaSansCondensed_900Black.ttf.png)||
|![SofiaSansCondensed_100Thin_Italic](./100Thin_Italic/SofiaSansCondensed_100Thin_Italic.ttf.png)|![SofiaSansCondensed_200ExtraLight_Italic](./200ExtraLight_Italic/SofiaSansCondensed_200ExtraLight_Italic.ttf.png)|![SofiaSansCondensed_300Light_Italic](./300Light_Italic/SofiaSansCondensed_300Light_Italic.ttf.png)||
|![SofiaSansCondensed_400Regular_Italic](./400Regular_Italic/SofiaSansCondensed_400Regular_Italic.ttf.png)|![SofiaSansCondensed_500Medium_Italic](./500Medium_Italic/SofiaSansCondensed_500Medium_Italic.ttf.png)|![SofiaSansCondensed_600SemiBold_Italic](./600SemiBold_Italic/SofiaSansCondensed_600SemiBold_Italic.ttf.png)||
|![SofiaSansCondensed_700Bold_Italic](./700Bold_Italic/SofiaSansCondensed_700Bold_Italic.ttf.png)|![SofiaSansCondensed_800ExtraBold_Italic](./800ExtraBold_Italic/SofiaSansCondensed_800ExtraBold_Italic.ttf.png)|![SofiaSansCondensed_900Black_Italic](./900Black_Italic/SofiaSansCondensed_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/sofia-sans-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sofia Sans Condensed page on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sofia Sans Condensed on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sofia-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sofia-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
