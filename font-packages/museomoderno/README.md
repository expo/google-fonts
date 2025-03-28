# @expo-google-fonts/museomoderno

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/museomoderno)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/museomoderno)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/museomoderno)

This package lets you use the [**MuseoModerno**](https://fonts.google.com/specimen/MuseoModerno) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## MuseoModerno

![MuseoModerno](./font-family.png)

This font family contains [18 styles](#-gallery).

- `MuseoModerno_100Thin`
- `MuseoModerno_200ExtraLight`
- `MuseoModerno_300Light`
- `MuseoModerno_400Regular`
- `MuseoModerno_500Medium`
- `MuseoModerno_600SemiBold`
- `MuseoModerno_700Bold`
- `MuseoModerno_800ExtraBold`
- `MuseoModerno_900Black`
- `MuseoModerno_100Thin_Italic`
- `MuseoModerno_200ExtraLight_Italic`
- `MuseoModerno_300Light_Italic`
- `MuseoModerno_400Regular_Italic`
- `MuseoModerno_500Medium_Italic`
- `MuseoModerno_600SemiBold_Italic`
- `MuseoModerno_700Bold_Italic`
- `MuseoModerno_800ExtraBold_Italic`
- `MuseoModerno_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/museomoderno expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/museomoderno/useFonts';
import { MuseoModerno_100Thin } from '@expo-google-fonts/museomoderno/100Thin';
import { MuseoModerno_200ExtraLight } from '@expo-google-fonts/museomoderno/200ExtraLight';
import { MuseoModerno_300Light } from '@expo-google-fonts/museomoderno/300Light';
import { MuseoModerno_400Regular } from '@expo-google-fonts/museomoderno/400Regular';
import { MuseoModerno_500Medium } from '@expo-google-fonts/museomoderno/500Medium';
import { MuseoModerno_600SemiBold } from '@expo-google-fonts/museomoderno/600SemiBold';
import { MuseoModerno_700Bold } from '@expo-google-fonts/museomoderno/700Bold';
import { MuseoModerno_800ExtraBold } from '@expo-google-fonts/museomoderno/800ExtraBold';
import { MuseoModerno_900Black } from '@expo-google-fonts/museomoderno/900Black';
import { MuseoModerno_100Thin_Italic } from '@expo-google-fonts/museomoderno/100Thin_Italic';
import { MuseoModerno_200ExtraLight_Italic } from '@expo-google-fonts/museomoderno/200ExtraLight_Italic';
import { MuseoModerno_300Light_Italic } from '@expo-google-fonts/museomoderno/300Light_Italic';
import { MuseoModerno_400Regular_Italic } from '@expo-google-fonts/museomoderno/400Regular_Italic';
import { MuseoModerno_500Medium_Italic } from '@expo-google-fonts/museomoderno/500Medium_Italic';
import { MuseoModerno_600SemiBold_Italic } from '@expo-google-fonts/museomoderno/600SemiBold_Italic';
import { MuseoModerno_700Bold_Italic } from '@expo-google-fonts/museomoderno/700Bold_Italic';
import { MuseoModerno_800ExtraBold_Italic } from '@expo-google-fonts/museomoderno/800ExtraBold_Italic';
import { MuseoModerno_900Black_Italic } from '@expo-google-fonts/museomoderno/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    MuseoModerno_100Thin, 
    MuseoModerno_200ExtraLight, 
    MuseoModerno_300Light, 
    MuseoModerno_400Regular, 
    MuseoModerno_500Medium, 
    MuseoModerno_600SemiBold, 
    MuseoModerno_700Bold, 
    MuseoModerno_800ExtraBold, 
    MuseoModerno_900Black, 
    MuseoModerno_100Thin_Italic, 
    MuseoModerno_200ExtraLight_Italic, 
    MuseoModerno_300Light_Italic, 
    MuseoModerno_400Regular_Italic, 
    MuseoModerno_500Medium_Italic, 
    MuseoModerno_600SemiBold_Italic, 
    MuseoModerno_700Bold_Italic, 
    MuseoModerno_800ExtraBold_Italic, 
    MuseoModerno_900Black_Italic
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
          fontFamily: "MuseoModerno_100Thin"
        }}>
          MuseoModerno Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_200ExtraLight"
        }}>
          MuseoModerno Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_300Light"
        }}>
          MuseoModerno Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_400Regular"
        }}>
          MuseoModerno Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_500Medium"
        }}>
          MuseoModerno Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_600SemiBold"
        }}>
          MuseoModerno Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_700Bold"
        }}>
          MuseoModerno Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_800ExtraBold"
        }}>
          MuseoModerno Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_900Black"
        }}>
          MuseoModerno Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_100Thin_Italic"
        }}>
          MuseoModerno Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_200ExtraLight_Italic"
        }}>
          MuseoModerno Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_300Light_Italic"
        }}>
          MuseoModerno Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_400Regular_Italic"
        }}>
          MuseoModerno Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_500Medium_Italic"
        }}>
          MuseoModerno Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_600SemiBold_Italic"
        }}>
          MuseoModerno Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_700Bold_Italic"
        }}>
          MuseoModerno Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_800ExtraBold_Italic"
        }}>
          MuseoModerno Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MuseoModerno_900Black_Italic"
        }}>
          MuseoModerno Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MuseoModerno_100Thin](./100Thin/MuseoModerno_100Thin.ttf.png)|![MuseoModerno_200ExtraLight](./200ExtraLight/MuseoModerno_200ExtraLight.ttf.png)|![MuseoModerno_300Light](./300Light/MuseoModerno_300Light.ttf.png)||
|![MuseoModerno_400Regular](./400Regular/MuseoModerno_400Regular.ttf.png)|![MuseoModerno_500Medium](./500Medium/MuseoModerno_500Medium.ttf.png)|![MuseoModerno_600SemiBold](./600SemiBold/MuseoModerno_600SemiBold.ttf.png)||
|![MuseoModerno_700Bold](./700Bold/MuseoModerno_700Bold.ttf.png)|![MuseoModerno_800ExtraBold](./800ExtraBold/MuseoModerno_800ExtraBold.ttf.png)|![MuseoModerno_900Black](./900Black/MuseoModerno_900Black.ttf.png)||
|![MuseoModerno_100Thin_Italic](./100Thin_Italic/MuseoModerno_100Thin_Italic.ttf.png)|![MuseoModerno_200ExtraLight_Italic](./200ExtraLight_Italic/MuseoModerno_200ExtraLight_Italic.ttf.png)|![MuseoModerno_300Light_Italic](./300Light_Italic/MuseoModerno_300Light_Italic.ttf.png)||
|![MuseoModerno_400Regular_Italic](./400Regular_Italic/MuseoModerno_400Regular_Italic.ttf.png)|![MuseoModerno_500Medium_Italic](./500Medium_Italic/MuseoModerno_500Medium_Italic.ttf.png)|![MuseoModerno_600SemiBold_Italic](./600SemiBold_Italic/MuseoModerno_600SemiBold_Italic.ttf.png)||
|![MuseoModerno_700Bold_Italic](./700Bold_Italic/MuseoModerno_700Bold_Italic.ttf.png)|![MuseoModerno_800ExtraBold_Italic](./800ExtraBold_Italic/MuseoModerno_800ExtraBold_Italic.ttf.png)|![MuseoModerno_900Black_Italic](./900Black_Italic/MuseoModerno_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/museomoderno` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [MuseoModerno page on Google Fonts](https://fonts.google.com/specimen/MuseoModerno) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [MuseoModerno on Google Fonts](https://fonts.google.com/specimen/MuseoModerno)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/museomoderno)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/museomoderno)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
